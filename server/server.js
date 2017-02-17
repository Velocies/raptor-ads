const express = require('express');
const path = require('path');
const app = express();
const db = require('../database/schemas.js');

const port = process.env.PORT || 3000;

const rootPath = path.join(__dirname, '/..');

app.use(express.static(rootPath));

require('./routes.js')(app, db, path, rootPath);

app.listen(port, () => {
  console.log('Example app listening on port', port);
});

module.exports = app;
