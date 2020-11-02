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
  if (!event.body) return returnMessage(405, "Unsupported media type")
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (!data.userId ||
    !data.name ||
    !data.description) {
    return returnMessage(400, 'Missing body parameter')
  }

  await require('./utils/instantiate-database')()

  let img
  if (data.image) {
    img = new Buffer.from(data.image, 'base64')
    if (!img) return returnMessage(400, 'Failed to upload image!')
  }

  let placeTypeId = data.typeId ? data.typeId : 0

  const Place = require('./models/place.model')
  await new Place({
    creatorId: data.userId,
    name: data.name,
    placeTypeId: placeTypeId,
    imageData: img,
    description: data.description,
    url: data.www,
    address: data.address,
    coordinates: data.location,
    approved: false
  }).save()

  return require('./utils/return-message')(undefined, 201)
}
