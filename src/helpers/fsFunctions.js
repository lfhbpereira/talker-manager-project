const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, '../talker.json');

const getAllTalkers = async () => {
  const data = await fs.readFile(DATA_PATH);

  return JSON.parse(data);
};

module.exports = getAllTalkers;
