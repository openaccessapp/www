const returnMessage = require('./utils/return-message')

/**
 * POST /api/update-place/{placeId}
 * Description: Updates the place's data
 * Body:
 *  string userId: the id of the user who is editing the place
 *  string name: the new name of the place
 *  string description: the description of the place
 *  string typeId: the id of the place type
 *  string image: base64 of the image
 *  string www: the website of the place
 *  string location: the location of the place todo this may be changed to an object
 */
exports.handler = async (event) => {
  console.log('Function `updatePlace` invoked')
  if (!event.body) return returnMessage(405, "Unsupported media type")
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  let placeId = require('./utils/extract-last-parameter')(event.path)

  const data = JSON.parse(event.body)
  if (!data.userId ||
    !placeId) {
    return returnMessage(400, 'Missing body parameter')
  }

  await require('./utils/instantiate-database')()
  const Place = require('./models/place.model')
  let place = await Place.findById(placeId)
  if (!place) return returnMessage(404, 'Place not found')

  if (data.userId !== place.creatorId) return returnMessage(401, 'User not creator')

  let img
  if (data.image) {
    img = new Buffer.from(data.image, 'base64')
    if (!img) return returnMessage(400, 'Failed to upload image!')
  }

  if (data.name) place.name = data.name
  if (data.description) place.description = data.description
  if (data.typeId) place.placeTypeId = data.typeId
  if (img) place.imageData = img
  if (data.www) place.url = data.www
  if (data.address) place.address = data.address
  if (data.location) place.coordinates = data.location

  await place.save()

  return returnMessage(200, "Place updated")

}
