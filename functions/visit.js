const returnMessage = require('./utils/return-message')
const moment = require('moment')

/**
 * POST /api/visit
 * Description: Creates a booking for a place in a slot
 * Body:
 *  string userId: the id of the user who is creating the place
 *  string slotId: the id of the place
 *  int visitors: how many people are going to visit
 */

exports.handler = async (event) => {
  console.log('Function `visit` invoked')
  if (!event.body) return returnMessage(405, "Unsupported media type")
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (!data.userId || !data.slotId || !data.visitors) {
    return returnMessage(400, 'Invalid body')
  }

  if (data.visitors > 7 || data.visitors < 1)
    return returnMessage(400, 'Visitors must be between 1 and 7')

  await require('./utils/instantiate-database')()
  const Slot = require('./models/slot.model')
  let slot = await Slot.findById(data.slotId)

  if (!slot) return returnMessage(404, 'Slot not found')

  let people = data.visitors

  const Booking = require('./models/booking.model')
  let booking = await Booking.findOne({ slotId: data.slotId, visitorId: data.userId })

  if (booking) {
    people -= booking.friendsNumber
    if (people !== 0) {
      if (slot.occupiedSlots + people > slot.maxVisitors)
        return returnMessage(400, 'Not enough place on this slot!')

      booking.friendsNumber = data.visitors
      await booking.save()
    } else return require('./utils/return-object')(undefined)

  } else {
    if (slot.occupiedSlots + people > slot.maxVisitors)
      return returnMessage(400, 'Not enough place on this slot!')

    let bookings = await Booking.find({ visitorId: data.userId }).populate({
      path: 'slotId',
      match: {
        $or:
          [
            {
              starts: // 10
                {
                  $gte: slot.starts, // 10
                  $lt: slot.ends // 11
                }
            },
            {
              ends: // 11
                {
                  $gt: slot.starts, // 10
                  $lte: slot.ends // 11
                }
            }
          ]
      },
      populate: { path: 'placeId' },
    })
    for (const booking of bookings) {
      const TIME_FORMAT = 'HH:mm'
      if (booking !== null && booking.slotId)
        return returnMessage(400, `You already have a booking at ${booking.slotId.placeId.name} (${moment(booking.slotId.starts).format(TIME_FORMAT)} - ${moment(booking.slotId.ends).format(TIME_FORMAT)}) that overlaps with this booking!`)

    }

    new Booking({
      slotId: data.slotId,
      visitorId: data.userId,
      friendsNumber: people
    }).save()
  }

  slot.occupiedSlots += people
  await slot.save()

  return require('./utils/return-object')(undefined)

}
