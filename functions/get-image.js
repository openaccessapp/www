/**
 * GET /api/get-place-types/{placeId}
 * Description: Returns the image of a place by it's id
 * Path params:
 *  string placeId: the id of the place
 * Response: the image as an image/png
 */
exports.handler = async (event) => {
  console.log('Function `getImage` invoked')
  //todo authorisation

  let placeId = require('./utils/extract-last-parameter')(event.path)

  await require('./utils/instantiate-database')()
  const Place = require('../models/place.model')
  let place = await Place.findById(placeId)

  if (!place) return require('./utils/return-message')(400, 'Place not found')

  return require('../utils/return-image')(place.imageData)
}
