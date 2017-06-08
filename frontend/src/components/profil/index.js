import React, { Component } from 'react';
import { connect } from 'react-redux';

import Memes from './Memes';
import UpdateProfil from './UpdateProfil';

import defaultUserProfilPicture from '../../../public/media/default-user-profile.png';

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
    if (!this.props.user) return (<div />);

    const { email, username, avatar } = this.props.user;

    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="profile container">
              <div className="has-text-centered">
                <figure className="image image-is-centered is-128x128">
                  <img
                    src={avatar ? `http://localhost:4242/api/image/${avatar}` : defaultUserProfilPicture}
                    className="is-centered" alt="profile"
                  />
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
              <a onClick={() => this.changeTab('profil')}>My Profil</a>
            </li>
            <li className={this.state.curTab === 'memes' && 'is-active'}>
              <a onClick={() => this.changeTab('memes')}>My Memes</a>
            </li>
          </ul>
        </div>
        <div className="columns">
          <div className="column is-one-quarter" />
          <div className="column is-half">
            {this.state.curTab === 'profil'
            ?
              <UpdateProfil />
            :
              <Memes memes={this.state.memes} />}
          </div>
          <div className="column" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Profil);
