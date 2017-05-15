import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Footer from './Footer';
import LoginModal from './modal/LoginModal';
import LogoutModal from './modal/LogoutModal';

import firebase from '../firebase';

import { login } from '../actions/LoginActions';

class App extends Component {
  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.dispatch(login(user));
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>PlugMeme</h1>
        </div>
        <LoginModal />
        <LogoutModal />
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
