const q = require('faunadb').query

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

  return require('./utils/instantiate-database')()
    //a simple delete query
    .query(q.Delete(q.Ref(`classes/places/${placeId}`)))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return require('./utils/return-message')(404, 'Place not found!')
    })
}
