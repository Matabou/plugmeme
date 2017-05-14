import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>PlugMeme</strong> by <a href="#">PlugTeam</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
