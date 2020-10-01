const faunadb = require('faunadb')

module.exports = function instantiateDatabase() {
  return new faunadb.Client({
    secret: "fnAD2-hzk1ACAacq0OAYD6O19FD549d_WuBYLeA1"
  })
}
