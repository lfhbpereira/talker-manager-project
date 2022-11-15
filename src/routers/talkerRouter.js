const express = require('express');
const fsFunctions = require('../helpers/fsFunctions');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talkers = await fsFunctions.getAllTalkers();

  res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkerById = await fsFunctions.getTalkerById(id);

  if (!talkerById) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).json(talkerById);
});

module.exports = router;
