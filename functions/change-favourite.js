const q = require('faunadb').query
const returnMessage = require('./utils/return-message')

exports.handler = async (event) => {
  console.log('Function `changeFavourites` invoked')
  //todo authorisation

  const data = JSON.parse(event.body)
  //check if the body is valid
  if (!data.visitorId)
    return returnMessage(400, 'Invalid User ID')

  if (!data.placeId)
    return returnMessage(400, 'Invalid Place ID')

  //get the visitor
  const client = require('./utils/instantiate-database')()
  let visitor = client.query(q.Get(q.Ref(`classes/visitors/${data.visitorId}`)))
    .then((response) => {
      return response.data
    }).catch(() => {
      return undefined
    })
  if (!visitor)
    return returnMessage(404, 'Place not found!')

  //add or remove the placeId from the favourites
  if (visitor.favourites.includes(data.placeId)) {
    for (let i = 0; i < visitor.favourites.length; i++) {
      if (visitor.favourites[i] === data.placeId) {
        visitor.favourites.splice(i, 1)
        break
      }
    }
  } else visitor.favourites.push(data.placeId)

  //update the favourites and return the response
  return client.query(q.Update(q.Ref(`classes/visitors/${data.visitorId}`), { data: visitor }))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return returnMessage(500, 'Could not update favourites!')
    })

}
