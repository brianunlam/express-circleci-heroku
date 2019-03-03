const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./db/models');
const user = require('./routes/user.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', user);

app.get('/', (req, res) => {
  res.status(200).send('Hello Continous Integration!!!');
});
module.exports = app;
