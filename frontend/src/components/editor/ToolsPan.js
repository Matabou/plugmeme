import React, { Component } from 'react';

class ToolsPan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      high_text: '',
      bottom_text: ''
    };

    this.updateHighText = this.updateHighText.bind(this);
    this.updateBottomText = this.updateBottomText.bind(this);
  }

  updateHighText(event) {
    this.setState({ high_text: event.target.value });
  }

  updateBottomText(event) {
    this.setState({ bottom_text: event.target.value });
  }

  render() {
    return (
      <div className="level-left">
        <div className="box">
          <div className="field">
            <label className="label">Text haut</label>
            <p className="control">
              <input
                className="input"
                type="text"
                value={this.state.high_text}
                onChange={this.updateHighText}
              />
            </p>
          </div>
          <div className="field">
            <label className="label">Text bas</label>
            <p className="control">
              <input
                className="input"
                type="text"
                value={this.state.bottom_text}
                onChange={this.updateBottomText}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolsPan;
