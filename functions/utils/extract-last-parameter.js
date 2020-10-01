//gets the last parameter from the url
module.exports = function extractLastParameter(urlPath) {
  return urlPath.match(/([^/]*)\/*$/)[0]
}
