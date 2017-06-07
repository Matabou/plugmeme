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
    }
  );
});

router.delete('/', (req, res) => {
  const memeId = req.body.memeId;
  
  db.deleteMeme(memeId)
    .then(() => {
      res.json({success: true});       
    })
    .catch(() => {
      res.json({success: false});       
    }
  );
});

router.put('/', (req, res) => {
  const memeId = req.body.memeId;
  const share = req.body.share;
  
  db.updateShareMeme(memeId, share)
    .then(() => {
      res.json({success: true});       
    })
    .catch(() => {
      res.json({success: false});       
    }
  );
});

router.get('/user/:id', (req, res) => {
  db.getMemeFromUser(req.params.id)
    .then((data) => {
      res.json({success: true, data: data});       
    })
    .catch(() => {
      res.json({success: false});       
    }
  );
});

router.get('/home', (req, res) => {
  db.getMemeForHome()
    .then((data) => {
      res.json({success: true, data: data});       
    })
    .catch(() => {
      res.json({success: false});       
    }
  );
});

module.exports = router;
