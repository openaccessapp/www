const mongoose = require('mongoose');


const visitorSchema = mongoose.Schema({
  priorityId: Number,
  favourites: [{ type: String, ref: 'Place' }],
  appleId: String
});

module.exports = mongoose.model('Visitor', visitorSchema);