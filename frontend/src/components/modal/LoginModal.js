import React from 'react';

import firebase from '../../firebase';
import PMApiClient from '../../apiUtil';

import ConnexionModal from './ConnexionModal';

const LoginModal = () => {
  const handleApply = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        user.getToken().then((token) => {
          const api = new PMApiClient(token);
          api.api('/api/tokensignin').then((data) => {
            console.log('this is the data ', data);
          }).catch((error) => {
            console.log('request failed', error);
          });
        });
      });
  };

  return (
    <ConnexionModal modalName="LOGIN" name="Login" onApply={handleApply} />
  );
};

export default LoginModal;
