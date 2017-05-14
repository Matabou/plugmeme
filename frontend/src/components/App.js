import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>PlugMeme</h2>
        <div className="block">
          <a className="button">Button</a>
          <a className="button is-white">White</a>
          <a className="button is-light">Light</a>
          <a className="button is-dark">Dark</a>
          <a className="button is-black">Black</a>
          <a className="button is-link">Link</a>
        </div>
        <div className="block">
          <a className="button is-primary">Primary</a>
          <a className="button is-info">Info</a>
          <a className="button is-success">Success</a>
          <a className="button is-warning">Warning</a>
          <a className="button is-danger">Danger</a>
        </div>
        <div className="list-group">
          <a className="list-group-item" href="#"><i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
          <a className="list-group-item" href="#"><i className="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; Library</a>
          <a className="list-group-item" href="#"><i className="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Applications</a>
          <a className="list-group-item" href="#"><i className="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp; Settings</a>
        </div>
      </div>
    );
  }
}
