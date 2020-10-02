const q = require('faunadb').query

const client = require('../functions/utils/instantiate-database')()

//create an index that returns all place types
client.query(
  q.Create(q.Ref('indexes'), {
    name: 'all_place_types',
    source: q.Ref('classes/placeTypes')
  }))
  .then(() => {console.log('Executed')})
  .catch(() => {console.log('Failed')})

//create an index that returns all places with the listed fields (values)
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
  .then(() => {console.log('Executed')})
  .catch((error) => {
    console.log('Failed', error)
  })

//create an index that returns all approved/disapproved places with the listed fields (values)
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
  .then(() => {console.log('Executed')})
  .catch(() => {console.log('Failed')})

//create an index that returns all places by a creator with the listed fields (values)
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
  .then(() => {console.log('Executed')})
  .catch((error) => {
    console.log('Failed', error)
  })

//create an index that returns all places with a specified placeTypeId with the listed fields (values)
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
      { field: ['data', 'name'] },
      { field: ['ref'] },
      { field: ['data', 'placeTypeId'] },
      { field: ['data', 'description'] },
      { field: ['data', 'url'] },
      { field: ['data', 'address'] },
      { field: ['data', 'coordinates'] },
      { field: ['data', 'approved'] },
    ]
  }))
  .then(() => {console.log('Executed')})
  .catch(() => {console.log('Failed')})

//create an index that returns all places with a specified placeTypeId with the listed fields (values)
client.query(
  q.Create(q.Ref('indexes'), {
    name: 'slots_search_start',
    source: q.Ref('classes/slots'),
    values: [
      { field: ['data', 'starts'] },
      { field: ['data', 'ends'] },
      { field: ['ref'] },
      { field: ['data', 'placeId'] },
      { field: ['data', 'typeId'] },
      { field: ['data', 'occupiedSlots'] },
      { field: ['data', 'maxVisitors'] }
    ]
  }))
  .then(() => {console.log('Executed')})
  .catch(() => {console.log('Failed')})