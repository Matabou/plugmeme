import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { cancelLogoutModal, logout } from '../../actions/LoginActions';
import firebase from '../../firebase';

class LogoutModal extends Component {
  constructor(props) {
    super(props);

    this.cancelModal = this.cancelModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
  }

  cancelModal() {
    this.props.dispatch(cancelLogoutModal());
  }

  confirmModal() {
    firebase.auth().signOut().then(() => this.props.dispatch(logout()));
  }

  render() {
    return (
      <div
        className={classNames('modal', {
          'is-active': this.props.login.isModalLogoutOpen,
        })}
      >
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Do you want to logout ?</p>
            <button onClick={this.cancelModal} className="delete" />
          </header>
          <footer className="modal-card-foot">
            <a className="button is-success" onClick={this.confirmModal}>Logout</a>
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

export default connect(mapStateToProps)(LogoutModal);
