const mongoose = require('mongoose')

//creates an instance of the database using the secret from the .env file
module.exports = async function instantiateDatabase () {
  mongoose.Promise = global.Promise
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(() => {
    console.log('Successfully connected to the database')
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
  })
  return mongoose
}
