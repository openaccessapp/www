const returnMessage = require('./utils/return-message')
const moment = require('moment')

const DATE_FORMAT = 'DD.MM.YYYY'
const TIME_FORMAT = 'HH:mm'

/**
 * POST /api/get-place-slots
 * Description: Returns the slots of a place
 * Body:
 *  string visitorId: the id of the user
 *  string placeId: the id of the place
 * Returns:
 *  {
    string (date): [
        {
            "id": string,
            "type": string,
            "from": string,
            "to": string,
            "occupiedSlots": int,
            "maxSlots": int
        }
    ]
}
 */
exports.handler = async (event) => {
  console.log('Function `getPlaceSlots` invoked')
  if (!event.body) return returnMessage(405, "Unsupported media type")
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (
    !data.visitorId ||
    !data.placeId) {
    return returnMessage(400, 'Missing body parameter')
  }

  let skip = data.skip ? Number.parseInt(data.skip) : 0
  let load = data.load ? Number.parseInt(data.load) : 20

  await require('./utils/instantiate-database')()
  const Slot = require('./models/slot.model')
  let slots = await Slot.find({
    placeId: data.placeId,
    //todo uncomment when live
    // starts: { $gte: moment().startOf('day').toDate() }
  }).sort({ starts: 1 }).skip(skip).limit(load)

  let slotIds = slots.map(slot => (slot.id))

  const Booking = require('./models/booking.model')
  let bookings = await Booking.find({ slotId: { $in: slotIds } })

  let output = []

  slots.forEach(slot => {
    let o = output[moment(slot.starts).format(DATE_FORMAT)]
    let booking = bookings.find(booking => booking.slotId === slot._id && booking.visitorId === data.visitorId)
    let obj = {
      id: slot.id,
      type: require('./utils/slot-types').findById(slot.typeId).name,
      from: moment(slot.starts).format(TIME_FORMAT),
      to: moment(slot.ends).format(TIME_FORMAT),
      occupiedSlots: slot.occupiedSlots,
      maxSlots: slot.maxVisitors,
      isPlanned: !!booking,
      friends: booking && booking.friendsNumber ? booking.friendsNumber : 0
    }
    if (o) o.push(obj)
    else
      output[moment(slot.starts).format(DATE_FORMAT)] = [obj]
  })

  return require('./utils/return-object')({ slots: { ...output } })

}
