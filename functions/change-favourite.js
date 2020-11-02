const returnMessage = require('./utils/return-message')

/**
 * POST /api/change-favourite
 * Description: Toggles the place as a user's favourite
 * Body:
 *  string placeId: the id of the place
 *  string visitorId: the id of the user
 */
exports.handler = async (event) => {
  console.log('Function `changeFavourites` invoked')
  if (!event.body) return returnMessage(405, "Unsupported media type")
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  const data = JSON.parse(event.body)
  //check if the body is valid
  if (!data.visitorId)
    return returnMessage(400, 'Invalid User ID')
  if (!data.placeId)
    return returnMessage(400, 'Invalid Place ID')

  //get the visitor
  await require('./utils/instantiate-database')()

  const Visitor = require('./models/visitor.model')
  let visitor = await Visitor.findById(data.visitorId)

  if (!visitor) return returnMessage(400, 'Invalid User ID')

  if (visitor.favourites.includes(data.placeId)) {
    for (let i = 0; i < visitor.favourites.length; i++) {
      if (visitor.favourites[i] === data.placeId) {
        visitor.favourites.splice(i, 1)
        break
      }
    }
  } else visitor.favourites.push(data.placeId)

  await visitor.save()

  return require('./utils/return-message')(undefined)

}
