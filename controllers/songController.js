const express = require('express');
const song = express.Router();

song.get('/', (req, res) => {
  res.status(200).send('Song list');
});

module.exports = song;
