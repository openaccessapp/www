
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
  if (!require('./utils/check-tokens')(event.headers, false)) return require('./utils/return-message')(401, 'Unauthorised')

  let mongo = await require('./utils/instantiate-database')()
  const PlaceType = require('./models/place.type.model')
  let places = (await PlaceType.find()).map(place => ({ id: place._id, name: place.name }))

  await mongo.disconnect()
  return require('./utils/return-object')({ placeTypes: places }, 201)
}
