require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.config');
const app = express();
const cors = require('cors');
const { notFound, errorHandler } = require('./src/middleware/error.middleware');

//RoUTES IMPORT
const routes = require('./routes/index');

//MONGODB
connectDB();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND.URL,
  })
);

//ROUTES
app.use('/api/v1', routes);

//ERROR HANDLER MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

//PORT
const PORT = process.env.PORT || 3001;

//SERVER
app.listen(PORT, (err) => {
  if (err) {
    console.log(`error listening to server: ${PORT}`);
  } else {
    console.log(`server started at: ${PORT}`);
  }
});
