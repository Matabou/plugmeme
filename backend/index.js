const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const minify = require('express-minify');
const admin = require("firebase-admin");
const util = require('util')



const serviceAccount = require("./cred.json");



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


app.post('/tokensignin',function(request,response){
  admin.auth().verifyIdToken(request.header("Authorization"))
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    admin.auth().getUser(uid)
    .then(function(userRecord) {
      response.json(userRecord.toJSON());
    })
    .catch(function(error) {
    console.log("Error fetching user data:", error);
  });
    console.log("Token is correct")
    // ...
  }).catch(function(error) {
    // Handle error
    console.log("Token is NOT correct")
  });

});
// start your server
app.listen(4242, () => {
  console.log('PlugMeme app listening on port 4242!');
});


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://plugmeme-96341.firebaseio.com"
});
