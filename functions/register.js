const returnMessage = require('./utils/return-message')

/**
 * POST /api/register
 * Description: Register the user with an apple id
 * Body:
 *  string userId: the id of the user who is creating the place
 *  string appleId: the id of the user who is creating the place
 */

exports.handler = async (event) => {
  console.log('Function `register` invoked')
  if (!event.body) return returnMessage(405, 'Unsupported media type')
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (!data.userId || !data.appleId) {
    return returnMessage(400, 'Invalid body')
  }

  let mongo = await require('./utils/instantiate-database')()
  const Visitor = require('./models/visitor.model')
  let visitor = await Visitor.findOne({ appleId: data.appleId })
  if (visitor) {
    await mongo.disconnect()
    return require('./utils/return-object')({ userId: visitor._id })
  }
  await Visitor.update({ _id: data.userId }, { appleId: data.appleId })

  await mongo.disconnect()
  return require('./utils/return-object')(undefined)
}
