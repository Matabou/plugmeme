import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
          {this.props.login.user === null || this.props.login.user === undefined ?
            <div className="nav-left">
              <NavLink className="nav-item" to="/">PlugMeme</NavLink>
              <div className="nav-right nav-menu">
                <a className="nav-item is-tab" onClick={this.displayInscription}>Inscription</a>
                <a className="nav-item is-tab" onClick={this.displayLogin}>Login</a>
              </div>
            </div>
          :
            <div className="nav-left">
              <NavLink className="nav-item" to="/">PlugMeme</NavLink>
              <NavLink className="nav-item is-tab is-active" to="/editeur">Editeur</NavLink>
              <NavLink className="nav-item is-tab" to="/memes">Mes Memes</NavLink>
              <NavLink className="nav-item is-tab" to="/recherche">Recherche</NavLink>
              <div className="nav-right nav-menu">
                <a className="nav-item is-tab" onClick={this.displayLogout}>Logout</a>
              </div>
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
