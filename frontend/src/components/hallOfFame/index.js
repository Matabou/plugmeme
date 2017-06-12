import React, { Component } from 'react';
import { connect } from 'react-redux';

import HOFActions from '../../actions/HallOfFameActions';

import Podium from './podium';

class HallOfFame extends Component {
  constructor(props) {
    super(props);

    const bestClicker = {
      title: 'Best Clicker',
      scoreUnit: 'clicks',
      users: null,
    };

    const bestCreator = {
      title: 'Best Creator',
      scoreUnit: 'likes',
      users: null,
    };

    this.state = {
      curTab: 'mostclicked',
      curBest: bestClicker,
      bestClicker: bestClicker,
      bestCreator,
    };

    this.changeTab = this.changeTab.bind(this);
  }
  componentWillMount() {
    HOFActions.fetchHOFMostLiked(
      this.props.dispatch,
    );

    HOFActions.fetchHOFMostClicked(
      this.props.dispatch,
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.halloffame.mostLikedUsers) {
      this.setState({
        bestCreator: {
          ...this.state.bestCreator,
          users: nextProps.halloffame.mostLikedUsers,
        },
      });
    }

    if (nextProps.halloffame.mostClicksUsers) {
      this.setState({
        bestClicker: {
          ...this.state.bestClicker,
          users: nextProps.halloffame.mostClicksUsers,
        },
      });
    }
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

const mapStateToProps = (state) => {
  return {
    halloffame: state.halloffame,
  };
};


export default connect(mapStateToProps)(HallOfFame);
