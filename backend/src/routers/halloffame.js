const express = require('express');
const fs = require('fs');

const db = require('./../db');
const upload = require('./../upload');

var router = express.Router();


router.get('/mostliked', (req, res) => {
  db.getMostLikedUsers()
    .then((data) => {
      res.json({success: true, data: data});       
    })
    .catch((err) => {
      res.json({success: false, err});       
    }
  );
});



module.exports = router;
