const q = require('faunadb').query
const returnMessage = require('./utils/return-message')
const moment = require('moment')

const DATE_FORMAT = 'DD.MM.YYYY'
const TIME_FORMAT = 'HH:mm'
const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`

/**
 * POST /api/get-place-slots
 * Description: Returns the slots of a place
 * Body:
 *  string userId: the id of the user who is creating the place
 *  string placeId: the id of the place
 */

//exports.getPlaceSlots = async (req, res) => {
//   let output = []
//
//   slots.forEach(slot => {
//     let o = output[moment(slot.starts).format(DATE_FORMAT)]
//     let booking = bookings.find(booking => booking.slotId === slot._id && booking.visitorId === req.params.visitorId)
//     if (o) o.push({
//       id: slot.id,
//       type: slotTypes.findById(slot.typeId).name,
//       from: moment(slot.starts).format(TIME_FORMAT),
//       to: moment(slot.ends).format(TIME_FORMAT),
//       occupiedSlots: slot.occupiedSlots,
//       maxSlots: slot.maxVisitors,
//       isPlanned: !!booking,
//       friends: booking && booking.friendsNumber ? booking.friendsNumber : 0
//     })
//     else
//       output[moment(slot.starts).format(DATE_FORMAT)] = [{
//         id: slot.id,
//         type: slotTypes.findById(slot.typeId).name,
//         from: moment(slot.starts).format(TIME_FORMAT),
//         to: moment(slot.ends).format(TIME_FORMAT),
//         occupiedSlots: slot.occupiedSlots,
//         maxSlots: slot.maxVisitors,
//         isPlanned: !!booking,
//         friends: booking && booking.friendsNumber ? booking.friendsNumber : 0
//       }]
//   })
//
//   return res.status(200).send({
//     slots: { ...output }
//   })
// }

exports.handler = async (event) => {
  console.log('Function `getPlaceSlots` invoked')
  //todo authorisation

  const data = JSON.parse(event.body)
  //check if the body is correct
  if (
    !data.visitorId ||
    !data.placeId) {
    return returnMessage(400, 'Missing body parameter')
  }

  let skip = data.skip ? Number.parseInt(data.skip) : 0
  let load = data.load ? Number.parseInt(data.load) : 20

  const client = require('./utils/instantiate-database')()

  //todo pagination
  let slots = await client.query(
    q.Filter(
      q.Paginate(
        q.Match(q.Index('slots_search_start')), { size: 10000 }
      ),
      q.Lambda(['starts', 'ends', 'ref', 'placeId', 'typeId', 'occupiedSlots', 'maxVisitors'],
        q.GTE(q.Var('starts'), moment().startOf('day').valueOf()))
    )
  ).then((response) => {return response.data})
    .catch(() => {return []})

  //todo get user's bookings
  //   let slotIds = slots.map(slot => (slot.id))
  //   let bookings = await Booking.find({ slotId: { $in: slotIds } })

  let output = { }

  slots.forEach(slot => {
    let o = output[moment(slot[0]).format(DATE_FORMAT)]
    //todo fix booking and friends number
    // let booking = bookings.find(booking => booking.slotId === slot._id && booking.visitorId === req.params.visitorId)
    let data = {
      id: slot[2].id,
      type: require('./utils/slot-types').findById(slot[4]).name,
      from: moment(slot[0]).format(TIME_FORMAT),
      to: moment(slot[1]).format(TIME_FORMAT),
      occupiedSlots: slot[5],
      maxSlots: slot[6],
      //todo uncomment
      // isPlanned: !!booking,
      // friends: booking && booking.friendsNumber ? booking.friendsNumber : 0
    }
    
    if (o) o.push(data)
    else output[moment(slot.starts).format(DATE_FORMAT)] = [data]
  })
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(output)
  }
}
