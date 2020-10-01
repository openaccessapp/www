const q = require('faunadb').query
const returnMessage = require('./utils/return-message')

/**
 * POST /api/update-place
 * Description: Updates the place's data
 * Body:
 *  string userId: the id of the user who is editing the place
 *  string placeId: the id of the place
 *  string name: the new name of the place
 *  string description: the description of the place
 *  string typeId: the id of the place type
 *  string image: base64 of the image
 *  string www: the website of the place
 *  string location: the location of the place todo this may be changed to an object
 */
exports.handler = async (event) => {
  console.log('Function `updatePlace` invoked')
  //todo authorisation

  const data = JSON.parse(event.body)
  if (!data.userId ||
    !data.placeId) {
    return returnMessage(400, 'Missing body parameter')
  }

  const client = require('./utils/instantiate-database')()
  //gets the place of it's id
  let place = client.query(q.Get(q.Ref(`classes/places/${data.placeId}`)))
    .then((response) => {
      return response.data
    }).catch(() => {
      return undefined
    })
  if (place)
    return returnMessage(404, 'Place not found!')

  //replace the data with the new one
  if (data.name) place.name = data.name
  if (data.description) place.description = data.description
  if (data.typeId) place.placeTypeId = data.typeId
  if (data.image) place.imageData = data.image
  if (data.www) place.url = data.www
  if (data.address) place.address = data.address
  if (data.location) place.coordinates = data.location

  //update the place in the db
  return client.query(q.Update(q.Ref('classes/places/' + data.placeId), { data: place }))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return returnMessage(500, 'Could not save place!')
    })

}
