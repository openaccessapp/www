const returnMessage = require('./utils/return-message')

/**
 * POST /api/delete-slot
 * Description: Deletes the slot and all of it's bookings
 * Body:
 *  string userId: the id of the user who is creating the place
 *  string slotId: the id of the slot
 */
exports.handler = async (event) => {
  console.log('Function `deleteSlot` invoked')
  if (!event.body) return returnMessage(405, "Unsupported media type")
  //todo authorisation

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (
    !data.slotId ||
    !data.userId) {
    return returnMessage(400, 'Missing body parameter')
  }

  await require('./utils/instantiate-database')()
  const Slot = require('../models/slot.model')

  let slot = await Slot.findOne({ _id: data.slotId }).populate({
    path: 'placeId'
  })

  if (!slot) return returnMessage(404, 'Slot not found')

  if (slot.placeId.creatorId !== data.userId)
    return returnMessage(401, 'User is not the creator')

  const Booking = require('../models/booking.model')
  await Booking.deleteMany({ slotId: data.slotId })
  await slot.delete()

  return require('./utils/return-message')(undefined)
}
