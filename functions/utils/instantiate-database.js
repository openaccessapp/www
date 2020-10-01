const faunadb = require('faunadb')

module.exports = function instantiateDatabase() {
  return new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  })
}
