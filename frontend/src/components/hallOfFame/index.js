import React, { Component } from 'react';

import Podium from './podium';

class HallOfFame extends Component {
  constructor(props) {
    super(props);

    const bestclickers = [];
    bestclickers.push({
      name: 'Arthur Lehuen',
      score: 128,
    });
    bestclickers.push({
      name: 'Antoine Cormerais',
      score: 108,
    });
    bestclickers.push({
      name: 'Alexandre Chabrolin',
      score: 98,
    });
    bestclickers.push({
      name: 'Thibault Deutsch',
      score: 73,
    });
    bestclickers.push({
      name: 'Bob',
      score: 55,
    });
    bestclickers.push({
      name: 'Arnaud Lemettre',
      score: 40,
    });

    const bestClicker = {
      title: 'Best Clicker',
      scoreUnit: 'clicks',
      users: bestclickers,
    };

    const bestCreator = {
      title: 'Best Creator',
      scoreUnit: 'likes',
      users: bestclickers,
    };

    this.state = {
      curTab: 'mostclicked',
      curBest: bestClicker,
      bestClicker,
      bestCreator,
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTab) {
    this.setState({
      curTab: newTab,
      curBest: newTab === 'mostclicked' ? this.state.bestClicker : this.state.bestCreator,
    });
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
        <div className="tabs is-centered">
          <ul>
            <li className={this.state.curTab === 'mostclicked' && 'is-active'}>
              <a onClick={() => this.changeTab('mostclicked')}>Best Clicker</a>
            </li>
            <li className={this.state.curTab === 'bestclicker' && 'is-active'}>
              <a onClick={() => this.changeTab('bestclicker')}>Best Creator</a>
            </li>
          </ul>
        </div>
        <Podium curBest={this.state.curBest} />
      </div>
    );
  }
}
export default HallOfFame;
