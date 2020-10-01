const q = require('faunadb').query
const returnMessage = require('./utils/return-message')

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
    creatorId: data.userId, name: data.name, placeTypeId: data.typeId ? data.typeId : "278075754694050311", imageData: data.imagey,
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
