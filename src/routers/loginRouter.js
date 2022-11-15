const express = require('express');
const generateToken = require('../helpers/generateToken');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const router = express.Router();

router.post('/', validateEmail, validatePassword, (_req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = router;
