const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const minify = require('express-minify');

const db = require('./db');
const firebaseAuth = require('./firebaseAuth');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  res.header("Access-Control-Allow-Methods", ["GET, POST, OPTIONS, PUT, DELETE"]);
  next();
});

var apiRoutes = express.Router();

app.get('/api/tokensignin', firebaseAuth.checkToken, function(request,response) {
  let user = request.params.user.toJSON();
  user.username = "SuperPlop";

  db.query();

  response.json(user);

});
// start your server
app.listen(4242, () => {
  console.log('PlugMeme app listening on port 4242!');
});
