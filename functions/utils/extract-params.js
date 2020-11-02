//gets the last parameter from the url
module.exports = function extractParams(urlPath) {
  return urlPath.match(/([^/]+)/g)
}
