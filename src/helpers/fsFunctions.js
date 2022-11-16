const fs = require('fs').promises;
const path = require('path');

const TALKERS_DATA = path.join(__dirname, '../talker.json');

const getAllTalkers = async () => {
  const data = await fs.readFile(TALKERS_DATA);

  return JSON.parse(data);
};

const getTalkerById = async (id) => {
  const talkers = await getAllTalkers();
  const talkerById = talkers.find((talker) => talker.id === Number(id));

  return talkerById;
};

const addNewTalker = async (talker) => {
  const talkers = await getAllTalkers();
  const newTalker = {
    id: talkers.length + 1,
    ...talker,
  };

  talkers.push(newTalker);
  await fs.writeFile(TALKERS_DATA, JSON.stringify(talkers));

  return newTalker;
};

const updateTalker = async (id, talker) => {
  const talkers = await getAllTalkers();
  const index = talkers.findIndex((t) => t.id === Number(id));

  if (index === -1) {
    return null;
  }

  talkers[index] = { id, ...talker };
  await fs.writeFile(TALKERS_DATA, JSON.stringify(talkers));

  return talkers[index];
};

module.exports = { getAllTalkers, getTalkerById, addNewTalker, updateTalker };
