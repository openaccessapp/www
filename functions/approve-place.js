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
  if (!event.body) return returnMessage(405, "Unsupported media type")
  if (!require('./utils/check-tokens')(event.headers, true)) return returnMessage(401, 'Unauthorised')

  const data = JSON.parse(event.body)
  if (!data.placeId ||
    data.approvedStatus === undefined) {
    return returnMessage(400, 'Missing body parameter')
  }

  await require('./utils/instantiate-database')()

  const Place = require('./models/place.model')
  await Place.updateOne({ _id: data.placeId }, { $set: { approved: data.approvedStatus } })

  return require('./utils/return-message')(undefined)
}
