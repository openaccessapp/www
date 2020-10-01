const q = require('faunadb').query
const returnMessage = require('./utils/return-message')

/**
 * POST /api/add-place
 * Description: Updates the place's data
 * Body:
 *  string userId: the id of the user who is creating the place
 *  string placeId: the id of the place
 *  string name: the new name of the place
 *  string description: the description of the place
 *  string typeId: the id of the place type
 *  string image: base64 of the image
 *  string www: the website of the place
 *  string location: the location of the place todo this may be changed to an object
 */
exports.handler = async (event) => {
  console.log('Function `addPlace` invoked')
  //todo authorisation

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (!data.userId ||
    !data.name ||
    !data.description) {
    return returnMessage(400, 'Missing body parameter')
  }

  const client = require('./utils/instantiate-database')()
  //map the data into an object
  let placeData = {
    creatorId: data.userId, name: data.name, placeTypeId: data.typeId ? data.typeId : "278075754694050311", imageData: data.image,
    description: data.description, url: data.www, address: data.address, coordinates: data.location, approved: false
  }
  //save it in the database
  return client.query(q.Create(q.Ref('classes/places'), {data: placeData}))
    .then(() => {
      return { statusCode: 201 }
    }).catch(() => {
      return returnMessage(500, 'Could not save place!')
    })
}
