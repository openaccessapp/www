/**
 * The different slot types for a slot of a place
 * For now - standard or priority
 */
const slotTypes = {
  STANDARD: { id: 0, name: 'Standard' },
  PRIORITY: { id: 1, name: 'Priority' }
}

const slots = [slotTypes.STANDARD, slotTypes.PRIORITY]

//Help functions to work with the slot types
exports.slots = () => { return slotTypes }

exports.findById = (id) => { return slots[id] }

exports.findByName = (name) => {
  for (let slot of slots) if (slot.name === name) return slot
  return 0
}