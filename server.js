require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.config');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { notFound, errorHandler } = require('./src/middleware/error.middleware');

const app = express();

//Routes IMPORT
const routes = require('./routes/index');

//MONGODB
connectDB();

//Set security HTTP headers
app.use(helmet());

//BODY Parser Middleware,reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Data sanitization against NOSQL query injection
app.use(mongoSanitize());

//TODO:Data sanitization against XSS

//Cookie parser middleware
app.use(cookieParser());

//CORS setting
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
//API Rate limiter
const limiter = rateLimiter({
  max: 100,
  windowMs: 60 * 60 * 1000, //1 hour
  message: 'Too many request from this IP, Please try again in an hour',
});
app.use('/api', limiter);

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
