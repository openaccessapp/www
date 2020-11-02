
/**
 * GET /api/delete-place/{placeId}
 * Description: Deletes a place by it's id
 * Path params:
 *  string placeId: the id of the place
 */
exports.handler = async (event) => {
  console.log('Function `deletePlace` invoked')
  //todo authorisation
  let placeId = require('./utils/extract-last-parameter')(event.path)

  await require('./utils/instantiate-database')()
  const Place = require('./models/place.model')

  await Place.deleteOne({ _id: placeId })

  return require('./utils/return-message')(undefined)
}
