const returnMessage = require('./utils/return-message')

/**
 * POST /api/delete-booking
 * Description: Deletes a booking of a user
 * Path params:
 *  string visitorId: the id of the user
 *  string slotId: the id of the slot
 */
exports.handler = async (event) => {
  console.log('Function `deleteVisit` invoked')
  if (!event.body) return returnMessage(405, 'Unsupported media type')
  //todo authorisation

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (
    !data.slotId ||
    !data.visitorId) {
    return returnMessage(400, 'Missing body parameter')
  }

  await require('./utils/instantiate-database')()
  const Booking = require('../models/booking.model')
  let found = await Booking.findOneAndDelete({ visitorId: data.visitorId, slotId: data.slotId })

  if (found) {
    const Slot = require('../models/slot.model')
    await Slot.findByIdAndUpdate(data.slotId,
      { $inc: { occupiedSlots: (found.friendsNumber * (-1)) } })
  } else {
    return returnMessage(404, 'Booking not found')
  }

  return require('./utils/return-message')(undefined)
}
