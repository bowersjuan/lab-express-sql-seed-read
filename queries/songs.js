const db = require('../db/config');

const getlAllSongs = async () => {
  try {
    const allSongs = await db.any('SELECT * FROM songs;');
    return allSongs;
  } catch (error) {
    return error;
  }
};

module.exports = { getlAllSongs };
