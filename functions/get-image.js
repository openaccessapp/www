// exports.getImage = async (req, res) => {
//   if (!req.params.placeId) {
//     return res.status(400).send({ message: 'Invalid place id' })
//   }
//   let place = await Place.findById(req.params.placeId)
//   if (place) {
//     res.contentType('image/png')
//     res.status(200).send(place.imageData)
//   }
// }
const q = require('faunadb').query

exports.handler = async (event) => {
  console.log('Function `getImage` invoked')
  //todo authorisation

  let placeId = require('./utils/extract-last-parameter')(event.path)

  const client = require('./utils/instantiate-database')()
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
