const mongoose = require('mongoose')

const bookingsSchema = mongoose.Schema({
  slotId: { type: String, ref: 'Slot' },
  visitorId: { type: String, ref: 'Visitor' },
  friendsNumber: Number
})

module.exports = mongoose.model('Booking', bookingsSchema)