const faunadb = require('faunadb')

//creates an instance of the database using the secret from the .env file
module.exports = function instantiateDatabase() {
  return new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  })
}
