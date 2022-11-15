const express = require('express');
const talkerRouter = require('./talkerRouter');

const router = express.Router();

router.use('/talker', talkerRouter);

module.exports = router;
