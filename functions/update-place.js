// exports.editPlace = async (req, res) => {
//   if (
//     !req.params.userId ||
//     !req.params.placeId) {
//     return res.status(400).send({ message: 'Missing parameter!' })
//   }
//
//   let place = await Place.findById(req.params.placeId)
//
//   if (!place) return res.status(404).send({ message: 'Place not found' })
//
//   if (req.params.userId !== place.creatorId) return res.status(401).send({ message: 'User not creator' })
//
//   let img
//   if (req.body.image) {
//     img = new Buffer.from(req.body.image, 'base64')
//     if (!img) return res.status(400).send({ message: 'Failed to upload image!' })
//   }
//
//   if (req.body.name) place.name = req.body.name
//   if (req.body.description) place.description = req.body.description
//   if (req.body.typeId) place.placeTypeId = req.body.typeId
//   if (img) place.imageData = img
//   if (req.body.www) place.url = req.body.www
//   if (req.body.address) place.address = req.body.address
//   if (req.body.location) place.coordinates = req.body.location
//
//   await place.save()
//
//   return res.status(200).send()
// }
const q = require('faunadb').query
const returnMessage = require('./utils/return-message')

exports.handler = async (event) => {
  console.log('Function `updatePlace` invoked')
  //todo authorisation

  const data = JSON.parse(event.body)
  if (!data.userId ||
    !data.placeId) {
    return returnMessage(400, 'Missing body parameter')
  }

  const client = require('./utils/instantiate-database')()
  let place = client.query(q.Get(q.Ref(`classes/places/${data.placeId}`)))
    .then((response) => {
      return response.data
    }).catch(() => {
      return undefined
    })
  if (place)
    return returnMessage(404, 'Place not found!')

  if (data.name) place.name = data.name
  if (data.description) place.description = data.description
  if (data.typeId) place.placeTypeId = data.typeId
  if (data.image) place.imageData = data.image
  if (data.www) place.url = data.www
  if (data.address) place.address = data.address
  if (data.location) place.coordinates = data.location

  return client.query(q.Update(q.Ref('classes/places/' + data.placeId), { data: place }))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return returnMessage(500, 'Could not save place!')
    })

}
