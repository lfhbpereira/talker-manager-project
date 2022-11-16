const express = require('express');
const fsFunctions = require('../helpers/fsFunctions');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');

const router = express.Router();

router.get('/search', validateToken, async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(200).json(await fsFunctions.getAllTalkers());
  }

  const talkersByName = await fsFunctions.getTalkersByName(q);

  res.status(200).json(talkersByName);
});

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

router.post(
  '/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const newTalker = await fsFunctions.addNewTalker({ name, age, talk });

    res.status(201).json(newTalker);
  },
);

router.put(
  '/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const talker = await fsFunctions.updateTalker(Number(id), { name, age, talk });

    res.status(200).json(talker);
  },
);

router.delete('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  await fsFunctions.deleteTalker(id);

  res.status(204).json();
});

module.exports = router;
