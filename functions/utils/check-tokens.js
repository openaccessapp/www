//easily returns a code with a message
module.exports = function checkToken (headers, isAdmin) {
  const tokens = require('./get-token')(headers)
  try {
    if (tokens.length > 0) {
      const jwt = require('jsonwebtoken')
      jwt.verify(tokens[0], process.env.ACCESS_TOKEN, { algorithms: ['HS256'] })

      if (isAdmin && tokens.length === 2) jwt.verify(tokens[1], process.env.ADMIN_TOKEN, { algorithms: ['HS256'] })
      return true
    }
  } catch (e) {
    return false
  }
  return false
}
