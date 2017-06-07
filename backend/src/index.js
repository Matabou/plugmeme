const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const minify = require('express-minify');

const db = require('./db');

const users = require('./routers/user');
const memes = require('./routers/memes');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  res.header("Access-Control-Allow-Methods", ["GET, POST, OPTIONS, PUT, DELETE"]);
  next();
});

db.initDatabase();

app.use('/api/user', users);
app.use('/api/memes', memes);

app.get('/api/image/:id', (req, res) => {
  res.sendFile(`./${req.params.id}`, { root: __dirname + '/public/uploads' });
});

// start your server
app.listen(4242, () => {
  console.log('PlugMeme app listening on port 4242!');
});
