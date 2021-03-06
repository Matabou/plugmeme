import React, { Component } from 'react';

class ToolsPan extends Component {
  constructor(props) {
    super(props);

    this.handleTopTextChange = this.handleTopTextChange.bind(this);
    this.handleBottomTextChange = this.handleBottomTextChange.bind(this);
  }

  handleTopTextChange(event) {
    this.props.onTopTextChange(event.target.value);
  }

  handleBottomTextChange(event) {
    this.props.onBottomTextChange(event.target.value);
  }

  render() {
    const topText = this.props.topText;
    const bottomText = this.props.bottomText;
    return (
      <div className="level-left">
        <div className="box">
          <div className="field">
            <p className="control">
              <textarea
                className="input"
                autoComplete="false"
                placeholder="Text haut"
                value={topText}
                onChange={this.handleTopTextChange}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <textarea
                className="input"
                autoComplete="false"
                placeholder="Text bas"
                value={bottomText}
                onChange={this.handleBottomTextChange}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolsPan;
