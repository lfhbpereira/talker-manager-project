const express = require('express');
const talkerRouter = require('./talkerRouter');
const loginRouter = require('./loginRouter');

const router = express.Router();

router.use('/talker', talkerRouter);
router.use('/login', loginRouter);

module.exports = router;
