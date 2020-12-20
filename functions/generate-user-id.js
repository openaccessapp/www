const returnMessage = require('./utils/return-message')
/**
 * GET /api/generate-user-id
 * Description: Creates a new user and returns it's id
 * Response:
 *  {
 *    "id": string
 *  }
 */
exports.handler = async (event) => {
  console.log('Function `generateUserId` invoked')
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  let mongo = await require('./utils/instantiate-database')()
  const Visitor = require('./models/visitor.model')

  return await new Visitor({
    priorityId: 0,
    favourites: []
  }).save()
    .then(async (res) => {
      await mongo.disconnect()
      return require('./utils/return-object')({ id: res._id }, 201)
    })
    .catch(async (err) => {
      console.log("Err:",err)
      await mongo.disconnect()
      return returnMessage(500, 'Could not save user!')
    })
}
