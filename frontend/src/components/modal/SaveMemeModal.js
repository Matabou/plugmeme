import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ModalActions from '../../actions/ModalActions';
import UserMemesActions from '../../actions/UserMemesActions';

class SaveMemeModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      visible: false,
      display: false,
      loading: false,
      name: 'SAVE_MEME',
    };

    this.cancelModal = this.cancelModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateVisible = this.updateVisible.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const isDisplay = nextProps.modal[this.state.name];
    if (isDisplay !== this.props.modal[this.state.name]) {
      this.setState({ display: isDisplay });
    }
  }

  updateTitle(event) {
    this.setState({ title: event.target.value });
  }

  updateVisible(event) {
    this.setState({ visible: event.target.value });
  }

  cancelModal() {
    this.props.dispatch(ModalActions.hideModal(this.state.name));
  }

  confirmModal() {
    this.setState({ loading: true });

    UserMemesActions.uploadMeme(this.props.dispatch, {
      userId: this.props.user.uid,
      title: this.state.title,
      img: this.props.finishMeme,
      share: !this.state.visible,
    }).then(() => {
      this.setState({ loading: false });
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
            <p className="modal-card-title">
              Create amazing new Meme
            </p>
            <button onClick={this.cancelModal} className="delete" />
          </header>
          <section className="modal-card-body">
            <figure className="image">
              <img src={this.props.finishMeme} alt="Finish meme" />
            </figure>
            <div className="field">
              <label className="label">Title</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  value={this.state.title}
                  onChange={this.updateTitle}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Make private</label>
              <input
                type="checkbox"
                value={this.state.visible}
                onChange={this.updateVisible}
              />
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className={this.state.loading ? `${buttonClassName} is-loading` : buttonClassName} onClick={this.confirmModal}>
              Create
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
    user: state.user,
  };
};

export default connect(mapStateToProps)(SaveMemeModal);
