import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import firebase from '../firebase';

import UserActions from '../actions/UserActions';
import ModalActions from '../actions/ModalActions';

class Navbar extends Component {
  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        UserActions.validateUser(this.props.dispatch, user);
      }
    });

    this.displayLogin = this.displayLogin.bind(this);
    this.displayInscription = this.displayInscription.bind(this);
    this.displayLogout = this.displayLogout.bind(this);
  }

  displayLogin() {
    this.props.dispatch(ModalActions.displayModal('LOGIN'));
  }

  displayInscription() {
    this.props.dispatch(ModalActions.displayModal('INSCRIPTION'));
  }

  displayLogout() {
    this.props.dispatch(ModalActions.displayModal('LOGOUT'));
  }

  render() {
    const path = this.props.router.location ? this.props.router.location.pathname : '/';
    const navLinkClassName = 'nav-item is-tab';

    return (
      <nav className="nav has-shadow">
        <div className="container">
          {this.props.user === null || this.props.user === undefined ?
            <div className="nav-left">
              <NavLink className={path === '/' ? `${navLinkClassName} is-active` : navLinkClassName} to="/">PlugMeme</NavLink>
              <NavLink className={path === '/recherche' ? `${navLinkClassName} is-active` : navLinkClassName} to="/recherche">Recherche</NavLink>
              <div className="nav-right nav-menu">
                <a className="nav-item is-tab" onClick={this.displayInscription}>Inscription</a>
                <a className="nav-item is-tab" onClick={this.displayLogin}>Login</a>
              </div>
            </div>
          :
            <div className="nav-left">
              <NavLink className={path === '/' ? `${navLinkClassName} is-active` : navLinkClassName} to="/">PlugMeme</NavLink>
              <NavLink className={path === '/editeur' ? `${navLinkClassName} is-active` : navLinkClassName} to="/editeur">Editor</NavLink>
              <NavLink className={path === '/profil' ? `${navLinkClassName} is-active` : navLinkClassName} to="/profil">Profil</NavLink>
              <NavLink className={path === '/recherche' ? `${navLinkClassName} is-active` : navLinkClassName} to="/recherche">Search</NavLink>
              <NavLink className={path === '/halloffame' ? `${navLinkClassName} is-active` : navLinkClassName} to="/halloffame">Hall of Fame</NavLink>
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
    user: state.user,
    router: state.router,
  };
};

export default connect(mapStateToProps)(Navbar);
