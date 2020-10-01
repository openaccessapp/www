const q = require('faunadb').query

const client = require('../functions/utils/instantiate-database')()

client.query(
  q.Create(q.Ref('indexes'), {
    name: 'all_place_types',
    source: q.Ref('classes/placeTypes')
  }))
  .then(() => {console.log("Executed")})
  .catch(() => {console.log("Failed")})

client.query(
  q.Create(q.Ref('indexes'), {
    name: 'all_places',
    source: q.Ref('classes/places'),
    values: [
      { field: ['ref'] },
      { field: ['data', 'name'] },
      { field: ['data', 'placeTypeId'] },
      { field: ['data', 'description'] },
      { field: ['data', 'url'] },
      { field: ['data', 'address'] },
      { field: ['data', 'coordinates'] },
      { field: ['data', 'approved'] },
    ]
  }))
  .then(() => {console.log("Executed")})
  .catch((error) => {
    console.log("Failed", error)
  })

client.query(
  q.Create(q.Ref('indexes'), {
    name: 'places_search_approved',
    source: q.Ref('classes/places'),
    terms: [
      {
        field: ['data', 'approved']
      }
    ],
    values: [
      { field: ['ref'] },
      { field: ['data', 'name'] },
      { field: ['data', 'placeTypeId'] },
      { field: ['data', 'description'] },
      { field: ['data', 'url'] },
      { field: ['data', 'address'] },
      { field: ['data', 'coordinates'] },
      { field: ['data', 'approved'] },
    ]
  }))
  .then(() => {console.log("Executed")})
  .catch(() => {console.log("Failed")})

client.query(
  q.Create(q.Ref('indexes'), {
    name: 'places_search_creatorId',
    source: q.Ref('classes/places'),
    terms: [
      {
        field: ['data', 'creatorId']
      }
    ],
    values: [
      { field: ['ref'] },
      { field: ['data', 'name'] },
      { field: ['data', 'placeTypeId'] },
      { field: ['data', 'description'] },
      { field: ['data', 'url'] },
      { field: ['data', 'address'] },
      { field: ['data', 'coordinates'] },
      { field: ['data', 'approved'] },
    ]
  }))
  .then(() => {console.log("Executed")})
  .catch((error) => {
    console.log("Failed", error)
  })

client.query(
  q.Create(q.Ref('indexes'), {
    name: 'places_search_placeTypeId',
    source: q.Ref('classes/places'),
    terms: [
      {
        field: ['data', 'placeTypeId']
      }
    ],
    values: [
      { field: ['ref'] },
      { field: ['data', 'name'] },
      { field: ['data', 'placeTypeId'] },
      { field: ['data', 'description'] },
      { field: ['data', 'url'] },
      { field: ['data', 'address'] },
      { field: ['data', 'coordinates'] },
      { field: ['data', 'approved'] },
    ]
  }))
  .then(() => {console.log("Executed")})
  .catch(() => {console.log("Failed")})