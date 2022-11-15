const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers/index');

const app = express();
app.use(bodyParser.json());
app.use(routers);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_req, res) => {
  res.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
