import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>PlugMeme</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
