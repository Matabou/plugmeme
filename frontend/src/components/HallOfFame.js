import React, { Component } from 'react';

class HallOfFame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curTab: 'mostclicked',
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTab) {
    this.setState({ curTab: newTab });
  }
  render() {
    return (

      <div>
        <div className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="profile container">
              <div className="has-text-centered">
                <h1>HALL OF FAME</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-quarter" />
          <div className="column is-half" >
            <div className="card">
              <div className="card-image">
                <figure className="image is-138x128">
                  <img src="http://bulma.io/images/placeholders/256x256.png" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">133 clicks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-quarter" />
        </div>
        <div className="columns">
          <div className="column is-4" >YOO</div>
          <div className="column is-4" >YOO</div>
        </div>
        <div className="tabs is-centered">
          <ul>
            <li className={this.state.curTab === 'mostclicked' && 'is-active'}>
              <a onClick={() => this.changeTab('mostclicked')}>Le plus liké</a>
            </li>
            <li className={this.state.curTab === 'bestclicker' && 'is-active'}>
              <a onClick={() => this.changeTab('bestclicker')}>Le meilleur clickeur</a>
            </li>
          </ul>
        </div>
        <div className="columns">
          <div className="column is-one-quarter" />
          <div className="column is-half">
            {this.state.curTab === 'mostclicked'
            ?
              <h1> MOST CLICKED </h1>
            :
              <h1> BEST CLICKEUR </h1>}
          </div>
          <div className="column" />
        </div>
      </div>
    );
  }
}
export default HallOfFame;
