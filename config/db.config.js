const mongoose = require('mongoose');

const db = process.env.MONGO_DB_URL;
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(db);
    console.log(`Mongo DB connected successfully: ${connect.connection.host}`);
  } catch (error) {
    console.log(`error connecting to DB: ${error}`);
  }
};

module.exports = connectDB;
