import React from 'react';

import firebase from '../../firebase';

import ConnexionModal from './ConnexionModal';

const LoginModal = () => {
  const handleApply = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return (
    <ConnexionModal modalName="LOGIN" name="Login" onApply={handleApply} />
  );
};

export default LoginModal;
