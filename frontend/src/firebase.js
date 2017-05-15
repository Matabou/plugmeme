import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDHPpCVjI4O5PEsaZLmEacdLgr1dV98ink',
  authDomain: 'plugmeme-96341.firebaseapp.com',
  databaseURL: 'https://plugmeme-96341.firebaseio.com',
  projectId: 'plugmeme-96341',
  storageBucket: 'plugmeme-96341.appspot.com',
  messagingSenderId: '136738311063',
};

firebase.initializeApp(config);

export default firebase;
