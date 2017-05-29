import React, { Component } from 'react';

class EditorArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: ''
    };

    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(event) {
    this.setState({ image: event.target.value });
  }

  render() {
    return (
      <div className="level">
        <div className="box">
          <canvas />
        </div>
      </div>
    );
  }
}

export default EditorArea;
