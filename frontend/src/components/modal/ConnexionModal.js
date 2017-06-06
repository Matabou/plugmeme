import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ModalActions from '../../actions/ModalActions';

class ConnexionModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errMsg: '',
      display: false,
      loading: false,
      name: props.modalName,
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const isDisplay = nextProps.modal[this.state.name];
    if (isDisplay !== this.props.modal[this.state.name]) {
      this.setState({ display: isDisplay });
    }
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

    this.props.dispatch(ModalActions.hideModal(this.state.name));
  }

  confirmModal() {
    this.setState({ loading: true });
    this.props.onApply(this.state.email, this.state.password)
      .then(() => {
        this.setState({ loading: false });
        this.cancelModal();
      })
      .catch((error) => {
        this.setState({ loading: false });
        this.setState({ errMsg: error.message });
      },
    );
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
            <p className="modal-card-title">
              {this.props.name}
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
            <a className={this.state.loading ? `${buttonClassName} is-loading` : buttonClassName} onClick={this.confirmModal}>
              {this.props.name === 'Login' ? 'Login' : 'Confirme'}
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
    modal: state.modal,
    login: state.login,
  };
};

export default connect(mapStateToProps)(ConnexionModal);
