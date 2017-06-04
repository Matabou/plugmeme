import React, { Component } from 'react';
import { connect } from 'react-redux';

function Memes(props) {
  return (
    <div className="memes">
      {
        props.memes.map((meme) => {
          return (
            <div className="card meme" key={meme.id}>
              <div className="card-header">
                <p className="card-header-title">
                  Meme Title
                </p>
              </div>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <nav className="level">
                    <div className="level-left">
                      <a className="level-item button is-success">
                        <span className="icon">
                          <i className="fa fa-thumbs-up" />
                        </span>
                        <span>Like</span>
                      </a>
                    </div>
                    <div className="level-right">
                      <a className="level-item button is-danger">
                        <span className="icon">
                          <i className="fa fa-thumbs-down" />
                        </span>
                        <span>Unlike</span>
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

class Recherche extends Component {
  constructor(props) {
    super(props);

    const memes = [];
    memes.push({
      id: 0,
    });
    memes.push({
      id: 1,
    });
    memes.push({
      id: 2,
    });
    memes.push({
      id: 3,
    });

    this.state = {
      memes: memes,
    };
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-one-quarter" />
          <div className="column is-half">
            <div className="box recherche">
              <div className="field">
                <label className="label">Title</label>
                <p className="control">
                  <input className="input" type="text" />
                </p>
              </div>
              <div className="field">
                <label className="label">Creator</label>
                <p className="control">
                  <input className="input" type="text" />
                </p>
              </div>
              <div className="field">
                <label className="label">Trie</label>
                <input type="radio" value="plop" /> Popularite<br />
                <input type="radio" value="plop" /> Nouveaute<br />
              </div>
              <hr />
              <a className="button is-success">
                <span className="icon">
                  <i className="fa fa-search" />
                </span>
                <span>Rechercher</span>
              </a>
            </div>
            <Memes memes={this.state.memes} />
          </div>
          <div className="column" />
        </div>
      </div>
    );
  }
}

export default connect()(Recherche);
