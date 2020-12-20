const returnMessage = require('./utils/return-message')

/**
 * GET /api/delete-slot/{userId}/{slotId}
 * Description: Deletes the slot and all of it's bookings
 * Body:
 *  string userId: the id of the user who is creating the place
 *  string slotId: the id of the slot
 */
exports.handler = async (event) => {
  console.log('Function `deleteSlot` invoked')
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  let params = require('./utils/extract-params')(event.path)
  let data = {}
  data.slotId = params[params.length - 1]
  data.userId = params[params.length - 2]
  //check if the body is correct
  if (
    !data.slotId ||
    !data.userId) {
    return returnMessage(400, 'Missing parameters')
  }

  let mongo = await require('./utils/instantiate-database')()
  const Slot = require('./models/slot.model')
  require('./models/place.model')

  let slot = await Slot.findOne({ _id: data.slotId }).populate({
    path: 'placeId'
  })

  if (!slot) {
    await mongo.disconnect()
    return returnMessage(404, 'Slot not found')
  }

  if (slot.placeId.creatorId !== data.userId) {
    await mongo.disconnect()
    return returnMessage(401, 'User is not the creator')
  }

  const Booking = require('./models/booking.model')
  await Booking.deleteMany({ slotId: data.slotId })
  await slot.delete()

  await mongo.disconnect()
  return require('./utils/return-object')(undefined)
}
