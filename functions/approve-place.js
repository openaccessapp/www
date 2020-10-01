const q = require('faunadb').query
const returnMessage = require('./utils/return-message')

/**
 * POST /api/approve-place
 * Description: Marks the place as approved/disapproved
 * Body:
 *  string placeId: the id of the place
 *  boolean approvedStatus: the new status of the place
 */
exports.handler = async (event) => {
  console.log('Function `approvePlace` invoked')
  //todo authorisation

  const data = JSON.parse(event.body)
  if (!data.placeId ||
    data.approvedStatus === undefined) {
    return returnMessage(400, 'Missing body parameter')
  }

  const client = require('./utils/instantiate-database')()

  //find the place
  let place = await client.query(q.Get(q.Ref(`classes/places/${data.placeId}`)))
    .then((response) => {
      return response.data
    }).catch(() => {
      return undefined
    })
  if (!place) return returnMessage(404, 'Place not found!')

  place.approved = data.approvedStatus

  //update and set it as approved
  return client.query(q.Update(q.Ref(`classes/places/${data.placeId}`), { data: place }))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return returnMessage(500, 'Could not update place!')
    })
}
