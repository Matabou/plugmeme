import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { cancelLoginModal } from '../../actions/LoginActions';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };

    this.updateLogin = this.updateLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }

  /*
  updateLogin = event => {
    this.setState({ login: event.target.value });
  };
  */

  updateLogin(event) {
    this.setState({ login: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  cancelModal() {
    this.props.dispatch(cancelLoginModal());
  }

  render() {
    return (
      <div
        className={classNames('modal', {
          'is-active': this.props.login.isModalOpen,
        })}
      >
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Login</p>
            <button onClick={this.cancelModal} className="delete" />
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Login</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  value={this.state.login}
                  onChange={this.updateLogin}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <p className="control">
                <input
                  className="input"
                  type="password"
                  value={this.state.password}
                  onChange={this.updatePassword}
                />
              </p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className="button is-success">
              Login
            </a>
            <a className="button" onClick={this.cancelModal}>Cancel</a>
          </footer>
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

export default connect(mapStateToProps)(LoginModal);