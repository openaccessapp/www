/**
 * GET /api/get-place-types
 * Description: Returns all place types ids and names
 * Response:
 *  [{
 *    "id": string
 *    "name": string,
 *  }]
 */
exports.handler = async () => {
  console.log('Function `getPlaceTypes` invoked')
  //todo authorisation

  await require('./utils/instantiate-database')()
  const PlaceType = require('./models/place.type.model')
  let places = (await PlaceType.find()).map(place => ({ id: place._id, name: place.name }))

  return require('./utils/return-object')({ placeTypes: places }, 201)
}
