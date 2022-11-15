const fs = require('fs').promises;
const path = require('path');

const TALKERS_DATA = path.join(__dirname, '../talker.json');

const getAllTalkers = async () => {
  const data = await fs.readFile(TALKERS_DATA);

  return JSON.parse(data);
};

module.exports = { getAllTalkers };
