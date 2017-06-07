import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserMemesActions from '../../actions/UserMemesActions';

class Memes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.fetchMeme = this.fetchMeme.bind(this);
  }

  componentWillMount() {
    this.fetchMeme();
  }

  fetchMeme(force = false) {
    this.setState({ loading: true });
    UserMemesActions.fetchUserMemeIfNeeded(
      this.props.dispatch,
      this.props.user.uid,
      this.props.userMemes,
      force,
    ).then(() => this.setState({ loading: false }));
  }

  render() {
    const memes = this.props.userMemes.memes;
    const buttonClassName = 'level-item button refresh-button is-success';

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
                  <figure className="image is-4by3">
                    <img src={meme.data} alt="content" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <nav className="level">
                      <div className="level-left">
                        <a className="level-item button is-success">
                          <span className="icon">
                            <i className="fa fa-share-alt" />
                          </span>
                          <span>Partager</span>
                        </a>
                      </div>
                      <div className="level-right">
                        <a className="level-item button is-danger">
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
