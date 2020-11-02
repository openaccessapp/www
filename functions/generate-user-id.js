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
  //todo authorisation

  await require('./utils/instantiate-database')()
  const Visitor = require('./models/visitor.model')

  return await new Visitor({
    priorityId: 0,
    favourites: []
  }).save()
    .then(res => {
      return require('./utils/return-object')({ id: res._id }, 201)
    })
    .catch(err => {
      console.log("Err:",err)
      return require('./utils/return-message')(500, 'Could not save user!')
    })
}
