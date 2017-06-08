import React, { Component } from 'react';

import defaultUserProfilPicture from '../../../public/media/default-user-profile.png';
import goldMedal from '../../../public/media/gold-medal.png';
import silverMedal from '../../../public/media/silver-medal.png';
import bronzeMedal from '../../../public/media/bronze-medal.png';


class Podium extends Component {
  render() {
    const { title, scoreUnit, users } = this.props.curBest;

    return (
      <div className="podium">
        <div className="has-text-centered">
          <h1 className="titlepodium">{title}</h1>
        </div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-one-third" />
              <div className="column is-one-third" >
                <div className="card">
                  <div className="card-image">
                    <figure className="image image-is-centered image is-128x128">
                      <img src={defaultUserProfilPicture} alt="First one" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="has-text-centered is-4">{users[0].name}</p>
                    <nav className="level">
                      <div className="level-left">
                        <p className="level-item">
                          {users[0].score} {scoreUnit}
                        </p>
                      </div>
                      <div className="level-right">
                        <figure className="image image-is-centered image is-48x48">
                          <img src={goldMedal} alt="gold medal" />
                        </figure>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="column is-quarter" />
            </div>
            <div className="columns">
              <div className="column is-one-quarter" />
              <div className="column is-half" >
                <div className="columns">
                  <div className="column is-half" >
                    <div className="card">
                      <div className="card-image">
                        <figure className="image image-is-centered image is-96x96">
                          <img src={defaultUserProfilPicture} alt="Second one" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <p className="has-text-centered is-4">{users[1].name}</p>
                        <nav className="level">
                          <div className="level-left">
                            <p className="level-item">
                              {users[1].score} {scoreUnit}
                            </p>
                          </div>
                          <div className="level-right">
                            <figure className="image image-is-centered image is-32x32">
                              <img src={silverMedal} alt="silver medal" />
                            </figure>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="column" >
                    <div className="card">
                      <div className="card-image">
                        <figure className="image image-is-centered image is-96x96">
                          <img src={defaultUserProfilPicture} alt="Third one" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <p className="has-text-centered is-4">{users[2].name}</p>
                        <nav className="level">
                          <div className="level-left">
                            <p className="level-item">
                              {users[2].score} {scoreUnit}
                            </p>
                          </div>
                          <div className="level-right">
                            <figure className="image image-is-centered image is-32x32">
                              <img src={bronzeMedal} alt="bronze medal" />
                            </figure>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column" />
              </div>
            </div>
          </div>
        </section>
        <div className="columns">
          <div className="column is-one-quarter" />
          <div className="column is-half" >
            <table className="table">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>User</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Pos</th>
                  <th>User</th>
                  <th>Score</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user, key) => {
                  return (
                    <tr key={key}>
                      <th>{key}</th>
                      <th>{user.name}</th>
                      <th>{user.score} {scoreUnit}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="column is-one-third" />
        </div>
      </div>
    );
  }
}

export default Podium;
