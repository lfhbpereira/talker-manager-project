const express = require('express');
const generateToken = require('../helpers/generateToken');

const router = express.Router();

router.post('/', (_req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = router;
