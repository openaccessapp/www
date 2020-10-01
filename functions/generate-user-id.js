const q = require('faunadb').query

/**
 * GET /api/generate-user-id
 * Description: Creates a new user and returns it's id
 * Response:
 *  {
 *    "id": string
 *  }
 */
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
