/**
 * GET /api/get-place-types
 * Description: Returns all place types ids and names
 * Response:
 *  [{
 *    "id": string
 *    "name": string,
 *  }]
 */
exports.handler = async (event) => {
  console.log('Function `getPlaceTypes` invoked')
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  await require('./utils/instantiate-database')()
  const PlaceType = require('./models/place.type.model')
  let places = (await PlaceType.find()).map(place => ({ id: place._id, name: place.name }))

  return require('./utils/return-object')({ placeTypes: places }, 201)
}
