const returnMessage = require('./utils/return-message')

/**
 * POST /api/approve-place/{placeId}/{approvedStatus}
 * Description: Marks the place as approved/disapproved
 * Body:
 *  string placeId: the id of the place
 *  boolean approvedStatus: the new status of the place
 */
exports.handler = async (event) => {
  console.log('Function `approvePlace` invoked')
  if (!require('./utils/check-tokens')(event.headers, true)) return returnMessage(401, 'Unauthorised')

  let params = require('./utils/extract-params')(event.path)
  let data = {}
  data.approvedStatus = params[params.length - 1]
  data.placeId = params[params.length - 2]
  if (!data.placeId ||
    data.approvedStatus === undefined) {
    return returnMessage(400, 'Missing body parameter')
  }

  await require('./utils/instantiate-database')()

  const Place = require('./models/place.model')
  await Place.updateOne({ _id: data.placeId }, { $set: { approved: data.approvedStatus } })

  return require('./utils/return-message')(undefined)
}
