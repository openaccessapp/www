const mongoose = require('mongoose');

const slotSchema = mongoose.Schema({
  placeId: { type: String, ref: 'Place' },
  typeId: Number,
  starts: Date,
  ends: Date,
  occupiedSlots: Number,
  maxVisitors: Number
});

module.exports = mongoose.model('Slot', slotSchema);