const admin = require('firebase-admin');

const firebaseCred = require('./../firebaseCred.json');

admin.initializeApp({
  credential: admin.credential.cert(firebaseCred),
  databaseURL: "https://plugmeme-96341.firebaseio.com"
});

const checkToken = (req, res, next) => {
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

module.exports = {
  checkToken,
};
