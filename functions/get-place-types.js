const q = require('faunadb').query

/**
 * GET /api/get-place-types
 * Description: Returns all place types ids and names
 * Response:
 *  [{
 *    "id": string
 *    "name": string,
 *  }]
 */
exports.handler = async () => {
  console.log('Function `getPlaceTypes` invoked')
  //todo authorisation

  const client = require('./utils/instantiate-database')()
  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_place_types'))))
    .then((response) => {
      const placeTypesRefs = response.data
      const getAllPlaceTypes = placeTypesRefs.map((ref) => {
        return q.Get(ref)
      })
      return client.query(getAllPlaceTypes).then((ret) => {
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ret.map((placeType) => {return { id: placeType.ref.id, name: placeType.data.name }}))
        }
      })
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
