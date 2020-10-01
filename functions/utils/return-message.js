module.exports = function returnMessage(code, message) {
  return {
    statusCode: code,
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"message": "${message}" }`
  }
}
