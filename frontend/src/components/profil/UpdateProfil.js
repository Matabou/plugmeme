import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserActions from '../../actions/UserActions';

class UpdateProfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      avatar: null,
      usernameLoading: false,
      avatarLoading: false,
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.saveUpdateUsername = this.saveUpdateUsername.bind(this);

    this.updateAvatar = this.updateAvatar.bind(this);
    this.saveUpdateAvatar = this.saveUpdateAvatar.bind(this);
  }

  updateUsername(event) {
    this.setState({ username: event.target.value });
  }

  saveUpdateUsername() {
    this.setState({ usernameLoading: true });
    UserActions.updateUsernamePromise(this.props.dispatch, this.state.username)
      .then(() => this.setState({ usernameLoading: false }));
  }

  updateAvatar(event) {
    this.setState({ avatar: event.target.files[0] });
  }

  saveUpdateAvatar() {
    this.setState({ avatarLoading: true });
    UserActions.updateAvatarPromise(this.props.dispatch, this.state.avatar)
      .then(() => this.setState({ avatarLoading: false }));
  }

  render() {
    const buttonClassName = 'button is-info';

    return (
      <div>
        {this.state.src && <img alt="plop" src={this.state.src} />}
        <label className="label">Username</label>
        <div className="field has-addons">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Username"
              onChange={this.updateUsername}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user" />
            </span>
          </p>
          <p className="control">
            <a
              className={this.state.usernameLoading ? `${buttonClassName} is-loading` : buttonClassName}
              onClick={this.saveUpdateUsername}
            >
              <span className="icon">
                <i className="fa fa-floppy-o" />
              </span>
              <span>Sauvegarder</span>
            </a>
          </p>
        </div>
        <hr />
        <label className="label">Avatar</label>
        <div className="field has-addons">
          <p className="control">
            <input className="input" type="file" name="avatar" onChange={this.updateAvatar} />
          </p>
          <p className="control">
            <a
              className={this.state.avatarLoading ? `${buttonClassName} is-loading` : buttonClassName}
              onClick={this.saveUpdateAvatar}
            >
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
}

export default connect()(UpdateProfil);
