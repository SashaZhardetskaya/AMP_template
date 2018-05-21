const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000, '0.0.0.0', function () {
  console.log('Listening on port: 8000!');
});