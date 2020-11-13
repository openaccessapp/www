//easily returns a code with a message
module.exports = function returnObject(json, code) {
  let headers = {
    'Content-Type': 'application/json',
  }
  if (!json && !code) code = 204
  if (!code) code = 200;

  let response = {
    statusCode: code,
    headers
  };

  if (json) response.body = JSON.stringify(json)

  return response
}
