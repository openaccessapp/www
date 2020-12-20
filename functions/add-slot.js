const returnMessage = require('./utils/return-message')
const moment = require('moment')

const DATE_FORMAT = 'DD.MM.YYYY'
const TIME_FORMAT = 'HH:mm'
const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`

/**
 * POST /api/add-slot/{placeId}
 * Description: Creates a new slot for a place
 * Body:
 *  string userId: the id of the user who is creating the place
 *  string placeId: the id of the place
 *  string type: the type of the slot
 *  string from: the starting time of the slot (DD.MM.YYYY HH:mm)
 *  string to: the end time of the slot (DD.MM.YYYY HH:mm)
 *  integer maxSlots: the maximum people for this slot
 */
exports.handler = async (event) => {
  console.log('Function `addSlot` invoked')
  if (!event.body) return returnMessage(405, 'Unsupported media type')
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  let placeId = require('./utils/extract-last-parameter')(event.path)

  const data = JSON.parse(event.body)
  data.placeId = placeId
  //check if the body is correct
  if (
    !data.type ||
    !data.placeId ||
    !data.userId ||
    !data.from ||
    !data.to ||
    !data.maxSlots) {
    return returnMessage(400, 'Missing body parameter')
  }

  let mongo = await require('./utils/instantiate-database')()

  const Place = require('./models/place.model')
  let place = await Place.findById(data.placeId)
  if (!place) {
    await mongo.disconnect()
    return returnMessage(404, 'Place not found')
  }
  if (place.creatorId !== data.userId) {
    await mongo.disconnect()
    return returnMessage(401, 'User not creator')
  }

  const Slot = require('./models/slot.model')
  const slotTypes = require('./utils/slot-types')
  await new Slot({
    placeId: data.placeId,
    typeId: slotTypes.findByName(data.type).id,
    starts: moment(`${data.from}`, DATE_TIME_FORMAT).toDate(),
    ends: moment(`${data.to}`, DATE_TIME_FORMAT).toDate(),
    occupiedSlots: 0,
    maxVisitors: data.maxSlots
  }).save()

  await mongo.disconnect()
  return require('./utils/return-object')(undefined)
}
