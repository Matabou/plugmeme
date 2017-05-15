import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Footer from './Footer';
import LoginModal from './modal/LoginModal';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>PlugMeme</h1>
        </div>
        <LoginModal />
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
