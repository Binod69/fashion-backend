const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`Mongo DB connected successfully: ${connect.connection.host}`);
  } catch (error) {
    console.log(`error connecting to DB: ${error}`);
  }
};

module.exports = connectDB;
