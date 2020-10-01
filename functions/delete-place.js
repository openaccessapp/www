// exports.deletePlace = async (req, res) => {
//   if (!req.params.placeId)
//     return res.status(400).send({ message: 'Missing parameter!' })
//
//   await Place.deleteOne({ _id: req.params.placeId })
//
//   return res.status(201).send()
// }
const q = require('faunadb').query

exports.handler = async (event) => {
  console.log('Function `deletePlace` invoked')
  //todo authorisation
  let placeId = require('./utils/extract-last-parameter')(event.path)

  return require('./utils/instantiate-database')()
    .query(q.Delete(q.Ref(`classes/places/${placeId}`)))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return require('./utils/return-message')(404, 'Place not found!')
    })
}
