/**
 * POST /api/get-places
 * Body:
 *  string typeId: the id of the place type
 *  string name: a filter for the name, checks if the name of the place contains it
 *  string approved: if the place is approved or not, possible values are true/false
 *  string own: if the visitor is the place's creator, possible values are true/false
 *  string visitorId: the id of the visitor
 *  string onlyFavourites: should it return only favourite places, possible values are true/false
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
const q = require('faunadb').query

exports.handler = async (event) => {
  console.log('Function `getPlaces` invoked')
  //todo authorisation

  let favourites = []

  const data = JSON.parse(event.body)
  const client = require('./utils/instantiate-database')()
  //get the user's favourites
  if (data.visitorId) {
    let visitor = client.query(q.Get(q.Ref(`classes/visitors/${data.visitorId}`)))
      .then((response) => {
        return response.data
      }).catch(() => {
        return undefined
      })
    if (visitor && visitor.favourites) favourites = visitor.favourites
  }

  let skip = data.skip ? Number.parseInt(data.skip) : 0
  let load = data.load ? Number.parseInt(data.load) : 5

  let placeTypes = new Map()
  let types = await client.query(q.Paginate(q.Match(q.Ref('indexes/all_place_types'))))
    .then((response) => {
      const placeTypesRefs = response.data
      const getAllPlaceTypes = placeTypesRefs.map((ref) => {
        return q.Get(ref)
      })
      return client.query(getAllPlaceTypes).then((ret) => {
        return ret.map((placeType) => {return { id: placeType.ref.id, name: placeType.data.name }})
      })
    }).catch(() => {
      return []
    })

  types.map(place => placeTypes.set(place.id, place.name))

  //if the name is not included we check if it contains empty string
  let search = { placeTypeId: null, name: '', approved: null, creatorId: null }

  if (data.typeId) search.placeTypeId = data.typeId
  if (data.name) search.name = data.name.toLowerCase()
  if (data.approved !== undefined) search.approved = data.approved === 'true'
  if (data.own === 'true') search.creatorId = data.visitorId

  //todo figure out pagination
  //Makes matches for placeTypeId, approved and creatorId if they are included in the request
  //and then filters out the matching names
  //this could be slow, should be tested with a lot of data and improved
  return await client.query(
    q.Filter(
      q.Paginate(
        q.Intersection(
          q.If(q.IsNull(q.Let({ 'x': search.placeTypeId }, q.Var('x'))),
            q.Match(q.Index('all_places')), q.Match(q.Index('places_search_placeTypeId'), search.placeTypeId)),
          q.If(q.IsNull(q.Let({ 'x': search.approved }, q.Var('x'))),
            q.Match(q.Index('all_places')), q.Match(q.Index('places_search_approved'), search.approved)),
          q.If(q.IsNull(q.Let({ 'x': search.creatorId }, q.Var('x'))),
            q.Match(q.Index('all_places')), q.Match(q.Index('places_search_creatorId'), search.creatorId)),
        ), { size: 10000 }
      ),
      q.Lambda(['ref', 'name', 'placeTypeId', 'description', 'url', 'address', 'coordinates', 'approved'],
        q.ContainsStr(q.LowerCase(q.Var('name')), search.name))
    )
  ).then((response) => {
    return client.query(response.data)
      .then((ret) => {
        let places = ret.map((place) => {
          return {
            id: place[0].id,
            name: place[1],
            type: placeTypes.get(place[2]),
            description: place[3],
            www: place[4],
            address: place[5],
            location: place[6],
            isFavourite: favourites.includes(place[0].id),
            approved: place[7]
          }
        })
        //filters out the non favourites
        if (data.onlyFavourites === 'true') places = places.filter(place => place.isFavourite)

        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(places)
        }
      })
  }).catch((error) => {
    console.log(error)
    return require('./utils/return-message')(500, 'Error..')
  })
}
