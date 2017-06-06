import React from 'react';

import firebase from '../../firebase';

import ConnexionModal from './ConnexionModal';

const InscriptionModal = () => {
  const handleApply = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <ConnexionModal modalName="INSCRIPTION" name="Inscription" onApply={handleApply} />
  );
};

export default InscriptionModal;
