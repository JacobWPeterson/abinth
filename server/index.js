const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const staticMiddlware = express.static(path.join(__dirname, '../client/dist'));

app.use('/', staticMiddlware);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port);
