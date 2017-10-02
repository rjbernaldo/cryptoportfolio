require('dotenv').config();

const express = require('express');
const client = require('./client');
const api = require('./api');

const app = express();

app.use('/app', client);
app.use('/api', api);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
