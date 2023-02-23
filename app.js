const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const songController = require('./controllers/songController');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Tuner');
});

app.use('/songs', songController);

module.exports = app;
