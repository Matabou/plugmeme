import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserActions from '../actions/UserActions';

class UpdateProfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      loading: false,
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateUsername(event) {
    this.setState({ username: event.target.value });
  }

  updateUser() {
    this.setState({ loading: true });
    UserActions.updateUsername(this.props.dispatch, this.state.username)
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const buttonClassName = 'button is-info';

    return (
      <div>
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
            <a className={this.state.loading ? `${buttonClassName} is-loading` : buttonClassName} onClick={this.updateUser}>
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
}

export default connect()(UpdateProfil);
