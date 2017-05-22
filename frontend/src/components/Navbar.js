import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { displayLoginModal } from '../actions/LoginActions';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.displayLogin = this.displayLogin.bind(this);
  }

  displayLogin() {
    this.props.dispatch(displayLoginModal());
  }

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <NavLink className="nav-item" to="/">PlugMeme</NavLink>
            <a className="nav-item is-tab is-active">Editeur</a>
            <a className="nav-item is-tab">Mes Memes</a>
            <a className="nav-item is-tab">Recherche</a>
          </div>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab">Inscription</a>
            <a className="nav-item is-tab" onClick={this.displayLogin}>Login</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(Navbar);
