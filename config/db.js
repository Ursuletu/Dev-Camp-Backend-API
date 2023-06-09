const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false
  }) // mongoose.connect() returns a promise

  console.log(`MongoDB Connected:${conn.connection.host}`.blue.underline.bold);
}

module.exports = connectDB;