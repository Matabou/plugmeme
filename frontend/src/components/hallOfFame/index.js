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
      users: [],
    };

    const bestCreator = {
      title: 'Best Creator',
      scoreUnit: 'likes',
      users: [],
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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.halloffame !== this.props.halloffame) {
      if (nextProps.halloffame.mostLikedUsers) {
        console.log('before', nextProps.halloffame.mostLikedUsers);
        // Use this form because previous state is needed, doesn't work better though :(
        this.setState(prevState =>
          ({
            bestClicker: {
              ...prevState.bestClicker,
              users: nextProps.halloffame.mostLikedUsers,
            },
          }, console.log('updated', this.state)),
        );

        /*
        this.setState({
          bestClicker: {
            ...this.state.bestClicker,
            users: nextProps.halloffame.mostLikedUsers,
          },
        }, console.log('updated', this.state));*/
      }
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
