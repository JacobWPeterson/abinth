const express = require('express');
const path = require('path');

const api = require('./api_handler.js');

const app = express();
const port = 3000;

const staticMiddlware = express.static(path.join(__dirname, '../client/dist'));

app.use('/', staticMiddlware);

app.get('/news', (req, res) => {
  api.fetchUsers('1376270016786558979', (follows) => {
    console.log(follows);
    res.sendStatus(200).send(follows);
  });
});

app.listen(port);
