const db = require('../db/config');

const getAllSongs = async () => {
  try {
    const allSongs = await db.any('SELECT * FROM songs;');
    return allSongs;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs };
