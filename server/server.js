const express = require('express');
const path = require('path');
const app = express();
const db = require('../database/schemas.js');
require('./routes.js')(app, db);

const port = process.env.PORT || 3000;

const rootPath = path.join(__dirname, '/..');

app.use(express.static(rootPath));


app.listen(port, () => {
  console.log('Example app listening on port', port);
});

module.exports = app;
