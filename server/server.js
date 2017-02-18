const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/schemas.js');

const app = express();

const port = process.env.PORT || 3000;

const rootPath = path.join(__dirname, '/..');

app.use(express.static(rootPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/routes.js')(app, db, path, rootPath);

app.listen(port, () => {
  console.log('Example app listening on port', port);
});

module.exports = app;
