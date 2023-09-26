require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.config');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { notFound, errorHandler } = require('./src/middleware/error.middleware');

const app = express();

//Routes IMPORT
const routes = require('./routes/index');

//MONGODB
connectDB();

//BODY Parser Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Cookie parser middleware
app.use(cookieParser());

//CORS setting
app.use(
  cors({
    origin: 'http://localhost:3000',
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
