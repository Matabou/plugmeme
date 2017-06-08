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
    .catch((err) => {
      res.json({success: false, err});       
    }
  );
});

router.delete('/', (req, res) => {
  const memeId = req.body.memeId;
  
  db.deleteMeme(memeId)
    .then(() => {
      res.json({success: true});       
    })
    .catch((err) => {
      res.json({success: false, err});       
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
    .catch((err) => {
      res.json({success: false, err});       
    }
  );
});

router.post('/grade', (req, res) => {
  const memeId = req.body.memeId;
  const inc = req.body.inc;
  
  db.updateGradeMeme(memeId, inc)
    .then(() => {
      res.json({success: true});       
    })
    .catch((err) => {
      res.json({success: false, err});       
    }
  );
});

router.get('/user/:id', (req, res) => {
  db.getMemeFromUser(req.params.id)
    .then((data) => {
      res.json({success: true, data: data});       
    })
    .catch((err) => {
      res.json({success: false, err});       
    }
  );
});

router.get('/home', (req, res) => {
  db.getMemeForHome()
    .then((data) => {
      res.json({success: true, data: data});       
    })
    .catch((err) => {
      res.json({success: false, err});       
    }
  );
});

router.post('/search', (req, res) => {
  const title = req.body.title;

  const sort = req.body.sort ? 'grade' : 'create_at';

  db.getMemeSearch(title, sort)
    .then((data) => {
      res.json({success: true, data: data});       
    })
    .catch((err) => {
      res.json({success: false, err});       
    }
  );
});

module.exports = router;
