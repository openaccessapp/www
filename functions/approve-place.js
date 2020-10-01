// exports.approve = async (req, res) => {
//   if (!req.params.placeId ||
//     !req.params.approvedStatus)
//     return res.status(400).send({ message: 'Missing parameter!' })
//
//   await Place.updateOne({ _id: req.params.placeId }, { $set: { approved: req.params.approvedStatus } })
//
//   return res.status(201).send()
// }
const q = require('faunadb').query
const returnMessage = require('./utils/return-message')

exports.handler = async (event) => {
  console.log('Function `approvePlace` invoked')
  //todo authorisation

  const data = JSON.parse(event.body)
  if (!data.placeId ||
    data.approvedStatus === undefined) {
    return returnMessage(400, 'Missing body parameter')
  }

  const client = require('./utils/instantiate-database')()

  let place = await client.query(q.Get(q.Ref(`classes/places/${data.placeId}`)))
    .then((response) => {
      return response.data
    }).catch(() => {
      return undefined
    })
  if (!place) return returnMessage(404, 'Place not found!')

  place.approved = data.approvedStatus

  return client.query(q.Update(q.Ref(`classes/places/${data.placeId}`), { data: place }))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return returnMessage(500, 'Could not save place!')
    })
}
