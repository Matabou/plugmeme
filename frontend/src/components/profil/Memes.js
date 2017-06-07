import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserMemesActions from '../../actions/UserMemesActions';

class Memes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      deleteLoading: 0,
      editLoading: 0,
    };

    this.fetchMeme = this.fetchMeme.bind(this);
    this.deleteMeme = this.deleteMeme.bind(this);
    this.updateShare = this.updateShare.bind(this);
  }

  componentWillMount() {
    this.fetchMeme();
  }

  fetchMeme(force = false) {
    this.setState({ loading: true });
    return UserMemesActions.fetchUserMemeIfNeeded(
      this.props.dispatch,
      this.props.user.uid,
      this.props.userMemes,
      force,
    ).then(() => this.setState({ loading: false }));
  }

  deleteMeme(meme) {
    this.setState({ deleteLoading: meme.id });
    UserMemesActions.deleteMeme(meme.id).then(() => {
      this.fetchMeme(true).then(() => this.setState({ deleteLoading: 0 }));
    });
  }

  updateShare(meme) {
    this.setState({ editLoading: meme.id });
    UserMemesActions.updateMemeShare(meme.id, !meme.share).then(() => {
      this.fetchMeme(true).then(() => this.setState({ editLoading: 0 }));
    });
  }

  render() {
    const memes = this.props.userMemes.memes;
    const buttonClassName = 'level-item button refresh-button is-success';
    const buttonDeleteClassName = 'level-item button is-danger';
    const buttonEditClassName = 'level-item button is-success';

    return (
      <div className="memes">
        <a className={this.state.loading ? `${buttonClassName} is-loading` : buttonClassName} onClick={() => this.fetchMeme(true)}>
          <span className="icon">
            <i className="fa fa-refresh" />
          </span>
          <span>Refresh</span>
        </a>
        { memes &&
          memes.map((meme) => {
            return (
              <div className="card meme" key={meme.id}>
                <div className="card-header">
                  <p className="card-header-title">
                    {meme.title}
                  </p>
                </div>
                <div className="card-image">
                  <figure className="image">
                    <img src={meme.data} alt={meme.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <nav className="level">
                      <div className="level-left">
                        {meme.share ?
                          <a
                            className={this.state.editLoading === meme.id ? `${buttonEditClassName} is-loading` : buttonEditClassName}
                            onClick={() => this.updateShare(meme)}
                          >
                            <span className="icon">
                              <i className="fa fa-user-secret" />
                            </span>
                            <span>Make Private</span>
                          </a>
                        :
                          <a
                            className={this.state.editLoading === meme.id ? `${buttonEditClassName} is-loading` : buttonEditClassName}
                            onClick={() => this.updateShare(meme)}
                          >
                            <span className="icon">
                              <i className="fa fa-share-alt" />
                            </span>
                            <span>Partager</span>
                          </a>
                        }
                      </div>
                      <p className="level-item has-text-centered">
                        {meme.grade}
                        <span className="icon">
                          <i className="fa fa-thumbs-up"></i>
                        </span>
                      </p>
                      <div className="level-right">
                        <a
                          className={this.state.deleteLoading === meme.id ? `${buttonDeleteClassName} is-loading` : buttonDeleteClassName}
                          onClick={() => this.deleteMeme(meme)}
                        >
                          <span className="icon">
                            <i className="fa fa-trash" />
                          </span>
                          <span>Supprimer</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userMemes: state.userMemes,
  };
};

export default connect(mapStateToProps)(Memes);
