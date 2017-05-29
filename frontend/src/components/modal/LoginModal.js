import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { cancelModal } from '../../actions/LoginActions';
import firebase from '../../firebase';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errMsg: '',
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  cancelModal() {
    this.setState({
      email: '',
      password: '',
      errMsg: '',
    });

    this.props.dispatch(cancelModal());
  }

  confirmModal() {
    if (this.props.login.isLogin) {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user) {
        user.getToken().then(function(token) {
          
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:4242/tokensignin');
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.onload = function() {
            console.log('Signed in as: ' + xhr.responseText);
          };
          xhr.send('token=' + token);
          
          console.log(token)});
      })
        .catch((error) => {
          this.setState({ errMsg: error.message });
              },
      );
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
          this.setState({ errMsg: error.message });
        },
      );
    }
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
            <p className="modal-card-title">
              {this.props.login.isLogin ? 'Login' : 'Inscription'}
            </p>
            <button onClick={this.cancelModal} className="delete" />
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Email</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  value={this.state.email}
                  onChange={this.updateEmail}
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
            {this.state.errMsg !== '' && <div className="notification is-danger">{this.state.errMsg}</div>}
          </section>
          <footer className="modal-card-foot">
            <a className="button is-success" onClick={this.confirmModal}>
              {this.props.login.isLogin ? 'Login' : 'Confirme'}
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
