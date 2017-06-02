import React, { Component } from 'react';
import { fabric } from 'fabric';

class EditorArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: ''
    };

    this.selectImage = this.selectImage.bind(this);
  }

  componentDidMount() {
    this.fabricCanvas = new fabric.Canvas(this.refs.canvas);

    fabric.Image.fromURL('http://lorempixel.com/200/200/', oImg => {
      oImg.set('selectable', false);
      this.fabricCanvas.add(oImg);
    });
  }

  selectImage(event) {
    this.setState({ image: event.target.value });
  }

  render() {
    return (
      <div className="column">
        <div className="box">
          <canvas ref="canvas" width="900" height="600" />
        </div>
      </div>
    );
  }
}

export default EditorArea;
