const q = require('faunadb').query

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

  const client = require('./utils/instantiate-database')()
  //gets the place with the specified id
  return client.query(q.Get(q.Ref(`classes/places/${placeId}`)))
    .then((response) => {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'image/png' },
        body: response.data.imageData,
        isBase64Encoded: true,
      }
    }).catch(() => {
      return require('./utils/return-message')(404, 'Image not found')
    })
}
