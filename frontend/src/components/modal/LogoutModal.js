import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import UserActions from '../../actions/UserActions';
import ModalActions from '../../actions/ModalActions';

import firebase from '../../firebase';

class LogoutModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      loading: false,
      name: 'LOGOUT',
    };

    this.cancelModal = this.cancelModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const isDisplay = nextProps.modal[this.state.name];
    if (isDisplay !== this.props.modal[this.state.name]) {
      this.setState({ display: isDisplay });
    }
  }

  cancelModal() {
    this.props.dispatch(ModalActions.hideModal(this.state.name));
  }

  confirmModal() {
    this.setState({ loading: true });
    firebase.auth().signOut().then(() => {
      this.setState({ loading: false });
      this.props.dispatch(UserActions.logout());
      this.cancelModal();
    });
  }

  render() {
    const buttonClassName = 'button is-success';

    return (
      <div
        className={classNames('modal', {
          'is-active': this.state.display,
        })}
      >
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Do you want to logout ?</p>
            <button onClick={this.cancelModal} className="delete" />
          </header>
          <footer className="modal-card-foot">
            <a className={this.state.loading ? `${buttonClassName} is-loading` : buttonClassName} onClick={this.confirmModal}>Logout</a>
            <a className="button" onClick={this.cancelModal}>Cancel</a>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    login: state.login,
  };
};

export default connect(mapStateToProps)(LogoutModal);
