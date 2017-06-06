import React, { Component } from 'react';
import { connect } from 'react-redux';

import Memes from './Memes';

import defaultUserProfilPicture from '../../public/media/default-user-profile.png';

function UpdateProfil() {
  return (
    <div>
      <label className="label">Username</label>
      <div className="field has-addons">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Username" />
          <span className="icon is-small is-left">
            <i className="fa fa-user" />
          </span>
        </p>
        <p className="control">
          <a className="button is-info">
            <span className="icon">
              <i className="fa fa-floppy-o" />
            </span>
            <span>Sauvegarder</span>
          </a>
        </p>
      </div>
      <hr />
      <label className="label">Photo de Profil</label>
      <div className="field has-addons">
        <p className="control">
          <input className="input" type="file" />
        </p>
        <p className="control">
          <a className="button is-info">
            <span className="icon">
              <i className="fa fa-floppy-o" />
            </span>
            <span>Sauvegarder</span>
          </a>
        </p>
      </div>
    </div>
  );
}

class Profil extends Component {
  constructor(props) {
    super(props);

    const memes = [];
    memes.push({
      id: 0,
    });
    memes.push({
      id: 1,
    });
    memes.push({
      id: 2,
    });
    memes.push({
      id: 3,
    });

    this.state = {
      curTab: 'profil',
      memes: memes,
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTab) {
    this.setState({ curTab: newTab });
  }

  section() {
    switch (this.state.curTab) {
      case 'profil':
        return UpdateProfil();
      case 'memes':
        return Memes(this.state.memes);
      default:
        return (<div />);
    }
  }

  render() {
    if (!this.props.login.user) return (<div />);

    const { email, username } = this.props.login.user;

    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="profile container">
              <div className="has-text-centered">
                <figure className="image image-is-centered is-128x128">
                  <img src={defaultUserProfilPicture} className="is-centered" alt="profile" />
                </figure>
                <h1 className="title">
                  {username}
                </h1>
                <h2 className="subtitle">
                  {email}
                </h2>
              </div>
            </div>
          </div>
        </section>
        <div className="tabs is-centered">
          <ul>
            <li className={this.state.curTab === 'profil' && 'is-active'}>
              <a onClick={() => this.changeTab('profil')}>Mon Profil</a>
            </li>
            <li className={this.state.curTab === 'memes' && 'is-active'}>
              <a onClick={() => this.changeTab('memes')}>Mes Memes</a>
            </li>
          </ul>
        </div>
        <div className="columns">
          <div className="column is-one-quarter" />
          <div className="column is-half">
            {this.section()}
          </div>
          <div className="column" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Profil);
