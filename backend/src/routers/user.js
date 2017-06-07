const express = require('express');

const db = require('./../db');
const firebaseAuth = require('./../firebaseAuth');
const upload = require('./../upload');

var router = express.Router();

router.get('/tokensignin', firebaseAuth.checkToken, (req, res) =>  {
  const user = req.params.user.toJSON();

  db.getUser(user.uid)
    .then(data => {
      user.username = data.name;
      res.json(user);          
    })
    .catch(err => console.log(err));
});

router.post('/name', firebaseAuth.checkToken, (req, res) =>  {
  const user = req.params.user.toJSON();
  const name = req.body.name;

  db.updateUsername(user.uid, name)
    .then(data => {
      user.username = data.name;
      res.json(user);          
    })
    .catch(err => console.log(err));
});

router.post('/image', firebaseAuth.checkToken, upload.avatarUpload, (req, res) => {

});

module.exports = router;
