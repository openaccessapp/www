
module.exports = function extractLastParameter(urlPath) {
  return urlPath.match(/([^/]*)\/*$/)[0]
}
