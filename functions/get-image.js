const returnMessage = require('./utils/return-message')
/**
 * GET /api/get-place-types/{placeId}
 * Description: Returns the image of a place by it's id
 * Path params:
 *  string placeId: the id of the place
 * Response: the image as an image/png
 */
exports.handler = async (event) => {
  console.log('Function `getImage` invoked')
  // if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  let placeId = require('./utils/extract-last-parameter')(event.path)
  if (!placeId) return returnMessage(400, 'Missing palce id')

  let mongo = await require('./utils/instantiate-database')()
  const Place = require('./models/place.model')
  let place = await Place.findById(placeId)

  if (!place) {
    await mongo.disconnect()
    return returnMessage(404, 'Place not found')
  }

  return require('./utils/return-image')(place.imageData)
}
