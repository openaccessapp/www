//easily returns a code with a message
module.exports = function getToken(headers) {
  if (headers.authorization){
    let header = headers.authorization.split(' ')
    if (header[0] === 'Bearer') {
      if (header.length === 2) return [header[1]]
      if (header.length === 3) return [header[1], header[2]]
    }
  }
  return []
}
