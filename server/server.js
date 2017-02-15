const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 7000;

var rootPath = path.join(__dirname, '/..');
var publicPath = path.join(rootPath, '/compiled/public');
app.use(express.static(path.join(__dirname, '../')));



app.listen(port, function () {
  console.log('Example app listening on port', port);
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
});