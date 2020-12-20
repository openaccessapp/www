const returnMessage = require('./utils/return-message')
/**
 * GET /api/delete-place/{placeId}
 * Description: Deletes a place by it's id
 * Path params:
 *  string placeId: the id of the place
 */
exports.handler = async (event) => {
  console.log('Function `deletePlace` invoked')
  if (!require('./utils/check-tokens')(event.headers, true)) return returnMessage(401, 'Unauthorised')
  let placeId = require('./utils/extract-last-parameter')(event.path)

  let mongo = await require('./utils/instantiate-database')()
  const Place = require('./models/place.model')

  await Place.deleteOne({ _id: placeId })

  await mongo.disconnect()
  return require('./utils/return-object')(undefined)
}
