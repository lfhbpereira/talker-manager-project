const express = require('express');
const fsFunctions = require('../helpers/fsFunctions');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talkers = await fsFunctions.getAllTalkers();

  res.status(200).json(talkers);
});

module.exports = router;
