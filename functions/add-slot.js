const q = require('faunadb').query
const returnMessage = require('./utils/return-message')
const moment = require('moment')

const DATE_FORMAT = 'DD.MM.YYYY'
const TIME_FORMAT = 'HH:mm'
const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`

/**
 * POST /api/add-slot
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
  //todo authorisation

  const data = JSON.parse(event.body)
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

  const client = require('./utils/instantiate-database')()

  //check if the place exists
  let place = await client.query(q.Get(q.Ref(`classes/places/${data.placeId}`)))
    .then((response) => { return response.data})
    .catch(() => {return undefined})

  if (!place) return returnMessage(404, 'Place not found')
  //and check if the user is the creator of the place
  else if (place.creatorId !== data.userId) return returnMessage(401, 'User not creator')

  //map the data into an object
  let slotData = {
    placeId: data.placeId,
    typeId: require('./utils/slot-types').findByName(data.type).id,
    starts: moment(`${data.from}`, DATE_TIME_FORMAT).valueOf(),
    ends: moment(`${data.to}`, DATE_TIME_FORMAT).valueOf(),
    occupiedSlots: 0,
    maxVisitors: data.maxSlots
  }

  //save it in the database
  return client.query(q.Create(q.Ref('classes/slots'), { data: slotData }))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return returnMessage(500, 'Could not save slot!')
    })
}
