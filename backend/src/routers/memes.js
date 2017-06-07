const express = require('express');
const fs = require('fs');

const db = require('./../db');
const upload = require('./../upload');

var router = express.Router();

router.post('/', (req, res) => {
  const data = req.body.memeData;
  
  db.createMeme(data)
    .then(() => {
      res.json({success: true});       
    })
    .catch(() => {
      res.json({success: false});       
    });
});

router.get('/user/:id', (req, res) => {
  db.getMemeFromUser(req.params.id)
    .then((data) => {
      res.json(data);       
    })
    .catch(() => {
      res.json({success: false});       
    });
});

module.exports = router;
