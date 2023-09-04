require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/index');

app.use(express.json());

//ROUTES
app.use('/api/v1', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`error listening to server: ${PORT}`);
  } else {
    console.log(`server started at: ${PORT}`);
  }
});
