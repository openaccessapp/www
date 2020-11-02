//easily returns a code with a message
module.exports = function returnObject(json, code, /*cookie, maxAge*/) {
  let headers = {
    'Content-Type': 'application/json',
  }
  //todo fix cookied and maxAge
  // if (cookie) {
  //   if (!maxAge) maxAge = require('../utilities/token-helper').TOKEN_MAXAGE
  //   headers['Set-Cookie'] = 'authToken=' + cookie + '; Max-Age=' + maxAge + '; HttpOnly'
  // }
  if (!json && !code) code = 204
  if (!code) code = 200;

  let response = {
    statusCode: code,
    headers
  };

  if (json) response.body = JSON.stringify(json)

  return response
}
