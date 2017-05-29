import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div />
    );
  }
}

export default connect()(App);
