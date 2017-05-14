import React, { Component } from 'react';

export default class Navbar extends Component {
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
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab">Inscription</a>
            <a className="nav-item is-tab">Login</a>
          </div>
        </div>
      </nav>
    );
  }
}
