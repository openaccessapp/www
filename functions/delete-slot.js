const q = require('faunadb').query
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
  //todo authorisation

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (
    !data.slotId ||
    !data.userId) {
    return returnMessage(400, 'Missing body parameter')
  }

  const client = require('./utils/instantiate-database')()

  //check if the place exists
  let slot = await client.query(q.Get(q.Ref(`classes/slots/${data.slotId}`)))
    .then((response) => { return response.data})
    .catch(() => {return undefined})

  if (!slot) return returnMessage(404, 'Slot not found')

  //todo check if the user is the creator

  //todo delete bookings on this slot

  //delete the slot from the database
  return client.query(q.Delete(q.Ref(`classes/slots/${data.slotId}`)))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return returnMessage(500, 'Could not delete!')
    })
}
