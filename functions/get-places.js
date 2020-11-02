const returnMessage = require('./utils/return-message')
/**
 * POST /api/get-places
 * Description: Returns all places by a given criteria
 * Body:
 *  string typeId: the id of the place type
 *  string name: a filter for the name, checks if the name of the place contains it
 *  string approved: if the place is approved or not, possible values are true/false
 *  string own: if the visitor is the place's creator, possible values are true/false
 *  string visitorId: the id of the visitor
 *  string onlyFavourites: should it return only favourite places, possible values are true/false
 *  int skip: the amount of places to skip to get to the current page
 *  int load: the amount of places to load in a page
 *
 * Returns:
 *  Array of object:
 *   [{
 *       "id": string,
 *       "name": string,
 *       "type": string,
 *       "description": string,
 *       "www": string,
 *       "address": string,
 *       "location": string,
 *       "isFavourite": boolean,
 *       "approved": boolean
 *   }]
 */
exports.handler = async (event) => {
  console.log('Function `getPlaces` invoked')
  if (!event.body) return returnMessage(405, "Unsupported media type")
  if (!require('./utils/check-tokens')(event.headers, false)) return returnMessage(401, 'Unauthorised')

  let favourites = []

  const data = JSON.parse(event.body)
  await require('./utils/instantiate-database')()

  if (data.visitorId) {
    const Visitor = require('./models/visitor.model')
    let visitor = await Visitor.findById(data.visitorId)
    if (visitor) favourites = visitor.favourites
  }

  let skip = data.skip ? Number.parseInt(data.skip) : 0
  let load = data.load ? Number.parseInt(data.load) : 5

  let placeTypes = new Map()
  const PlaceType = require('./models/place.type.model')
  let types = await PlaceType.find()
  types.map(place => placeTypes.set(place._id, place.name))

  let search = {}

  if (data.typeId) search.placeTypeId = data.typeId
  if (data.name) search.name = new RegExp(`.*${data.name}.*`, 'i')
  if (data.approved !== undefined) search.approved = data.approved === 'true'
  if (data.own === 'true') search.creatorId = data.visitorId

  const Place = require('./models/place.model')
  let places = await Place.find(search).sort({ name: 1 }).skip(skip).limit(load)

  let output = places.map(place => ({
    id: place._id,
    name: place.name,
    type: placeTypes.get(place.placeTypeId),
    description: place.description,
    www: place.url,
    address: place.address,
    location: place.coordinates,
    isFavourite: favourites.includes(place._id),
    approved: place.approved
  }))

  if (data.onlyFavourites === 'true') output = output.filter(place => place.isFavourite)
  return require('./utils/return-object')({ places: output })
}
