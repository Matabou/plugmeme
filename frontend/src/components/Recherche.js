import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchActions from '../actions/SearchActions';

class Recherche extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      sort: 'pop',
      loading: false,
      likeLoading: null,
      likeReloading: null,
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateSort = this.updateSort.bind(this);
    this.applySearch = this.applySearch.bind(this);
    this.addLike = this.addLike.bind(this);
    this.progressLoading = this.progressLoading.bind(this);
  }

  updateTitle(event) {
    this.setState({ title: event.target.value });
  }

  updateSort(event) {
    this.setState({ sort: event.target.value });
  }

  applySearch() {
    this.setState({ loading: true });
    return SearchActions.fetchSearchMeme(
      this.props.dispatch,
      this.state.title,
      this.state.sort === 'pop',
    ).then(() => this.setState({ loading: false }));
  }

  addLike(meme, inc) {
    this.setState({ likeLoading: meme.id });

    SearchActions.updateMemeGrade(
      meme.id,
      inc,
    ).then(() => this.applySearch()
      .then(() => {
        this.setState({ likeLoading: null });
        this.setState({ likeReloading: 1 });
        this.progressLoading();
      }),
    );
  }

  progressLoading() {
    this.setState({ likeReloading: this.state.likeReloading + 1 });
    setTimeout(() => {
      if (this.state.likeReloading >= 100) {
        this.setState({ likeReloading: null });
      } else {
        this.progressLoading();
      }
    }, 100);
  }

  render() {
    const memes = this.props.search.memes;
    const buttonClassName = 'button is-success';
    const buttonLikeClassName = 'level-item button is-success';
    const buttonUnLikeClassName = 'level-item button is-danger';

    return (
      <div>
        <div className="columns">
          <div className="column is-one-quarter" />
          <div className="column is-half">
            <div className="box recherche">
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
                <label className="label">Sort</label>
                <input type="radio" value="pop" onChange={this.updateSort} checked={this.state.sort === 'pop'} /> Rating<br />
                <input type="radio" value="new" onChange={this.updateSort} checked={this.state.sort === 'new'} /> Fresh<br />
              </div>
              <hr />
              <a className={this.state.loading ? `${buttonClassName} is-loading` : buttonClassName} onClick={this.applySearch}>
                <span className="icon">
                  <i className="fa fa-search" />
                </span>
                <span>Rechercher</span>
              </a>
            </div>
            {memes &&
              <div className="memes">
                {
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
                          {this.state.likeReloading ?
                            <progress className="progress is-large" value={this.state.likeReloading} max="100" />
                          :
                            <nav className="level">
                              <div className="level-left">
                                <a
                                  className={this.state.likeLoading === meme.id ? `${buttonLikeClassName} is-loading` : buttonLikeClassName}
                                  onClick={() => this.addLike(meme, 1)}
                                >
                                  <span className="icon">
                                    <i className="fa fa-thumbs-up" />
                                  </span>
                                  <span>Like</span>
                                </a>
                              </div>
                              <p className="level-item has-text-centered">
                                {meme.grade}
                                <span className="icon">
                                  <i className="fa fa-thumbs-up"></i>
                                </span>
                              </p>
                              <div className="level-right">
                                <a
                                  className={this.state.likeLoading === meme.id ? `${buttonUnLikeClassName} is-loading` : buttonUnLikeClassName}
                                  onClick={() => this.addLike(meme, -1)}
                                >
                                  <span className="icon">
                                    <i className="fa fa-thumbs-down" />
                                  </span>
                                  <span>Unlike</span>
                                </a>
                              </div>
                            </nav>
                          }
                        </div>
                      </div>
                    </div>
                  );
                })
                }
              </div>
              }
          </div>
          <div className="column" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};


export default connect(mapStateToProps)(Recherche);
