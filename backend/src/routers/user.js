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
      user.avatar = data.avatar;
      res.json(user);          
    })
    .catch(err => console.log(err));
});

router.post('/name', firebaseAuth.checkToken, (req, res) =>  {
  const user = req.params.user.toJSON();
  const name = req.body.name;

  db.updateUsername(user.uid, name)
    .then(data => {
      res.json(data);          
    })
    .catch(err => console.log(err));
});

router.post('/avatar', firebaseAuth.checkToken, upload.fileUpload, (req, res) => {
  const user = req.params.user.toJSON();
  const file = req.file;

  db.updateAvatar(user.uid, file.filename)
    .then(data => {
      res.json(data);          
    })
    .catch(err => console.log(err));
});

module.exports = router;
