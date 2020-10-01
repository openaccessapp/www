// exports.generateUserId = (req, res) => {
//   let id = nanoid.nanoid()
//
//   new Visitor({
//     _id: id,
//     priorityId: 0,
//     favourites: []
//   }).save()
//     .then(() => {
//       return res.status(200).send({ id })
//     })
//     .catch(err => {
//       return res.status(500).send({ message: 'Could not save user!' })
//     })
// }
const q = require('faunadb').query

exports.handler = async () => {
  console.log('Function `generateUserId` invoked')
  const client = require('./utils/instantiate-database')()
  //todo authorisation

  return client.query(q.Create(q.Ref('classes/visitors'), { data: { priorityId: 0, favourites: [] } }))
    .then((response) => {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: response.ref.id })
      }
    }).catch(() => {
      return require('./utils/return-message')(500, 'Could not save user')
    })
}
