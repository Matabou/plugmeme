const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const minify = require('express-minify');
const admin = require('firebase-admin');
const util = require('util')

const serviceAccount = require('./cred.json');

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

function checkToken(req, res, next) {
 let token = req.header("Authorization");
  // decode token
  if (token) {
    admin.auth().verifyIdToken(token)
    .then(function(decodedToken) {
      let uid = decodedToken.uid;
      admin.auth().getUser(uid)
      .then(function(userRecord) {
        req.params.user = userRecord;
        next()
    })
    .catch(function(error) {
      console.log("Error fetching user data:", error);
      return res.json({ success: false, message: 'Failed to fetch user data.' });  
    });
  }).catch(function(error) {
    // Handle error
    return res.json({ success: false, message: 'Failed to authenticate token.' });  
  });

  } else {
    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
}

app.post('/api/tokensignin', checkToken, function(request,response) {
  let user = request.params.user;
  response.json(user.toJSON());

});
// start your server
app.listen(4242, () => {
  console.log('PlugMeme app listening on port 4242!');
});


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://plugmeme-96341.firebaseio.com"
});
