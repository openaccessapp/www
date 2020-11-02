const mongoose = require('mongoose')

const placeTypesSchema = mongoose.Schema({
  _id: Number,
  name: String
})


module.exports = mongoose.model('PlaceType', placeTypesSchema)