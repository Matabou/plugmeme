import React, { Component } from 'react';
import { connect } from 'react-redux';

import { displayLoginModal, displayInscriptionModal, displayLogoutModal } from '../actions/LoginActions';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.displayLogin = this.displayLogin.bind(this);
    this.displayInscription = this.displayInscription.bind(this);
    this.displayLogout = this.displayLogout.bind(this);
  }

  displayLogin() {
    this.props.dispatch(displayLoginModal());
  }

  displayInscription() {
    this.props.dispatch(displayInscriptionModal());
  }

  displayLogout() {
    this.props.dispatch(displayLogoutModal());
  }

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">PlugMeme</a>
            <a className="nav-item is-tab is-active">Editeur</a>
            <a className="nav-item is-tab">Mes Memes</a>
            <a className="nav-item is-tab">Recherche</a>
          </div>
          {this.props.login.user === null || this.props.login.user === undefined ?
            <div className="nav-right nav-menu">
              <a className="nav-item is-tab" onClick={this.displayInscription}>Inscription</a>
              <a className="nav-item is-tab" onClick={this.displayLogin}>Login</a>
            </div>
          :
            <div className="nav-right nav-menu">
              <a className="nav-item is-tab" onClick={this.displayLogout}>Logout</a>
            </div>
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Navbar);
