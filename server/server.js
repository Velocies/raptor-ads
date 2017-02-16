const express = require('express');
const path = require('path');
const app = express();
const db = requick('../database/schemas/schemas.js');

const port = process.env.PORT || 3000;

const rootPath = path.join(__dirname, '/..');

app.use(express.static(rootPath));

require('./config/routes.js')(app, db);

app.listen(port, () => {
  console.log('Example app listening on port', port);
});

module.exports = app;
