import React, { Component } from 'react';
import { fabric } from 'fabric';

class EditorArea extends Component {
  constructor(props) {
    super(props);
    this.fabricCanvas = new fabric.Canvas(this.refs.canvas);
    this.topTextObj = new fabric.Text(this.props.topText, {
      left: 300,
      top: 100
    });
    this.bottomTextObj = new fabric.Text(this.props.bottomText, {
      left: 300,
      top: 400
    });
  }

  componentDidMount() {
    this.fabricCanvas = new fabric.Canvas(this.refs.canvas);
    fabric.Image.fromURL(this.props.image, oImg => {
      oImg.set('selectable', false);
      this.fabricCanvas.add(oImg);
    });
    this.fabricCanvas.add(this.topTextObj);
    this.fabricCanvas.add(this.bottomTextObj);
  }

  render() {
    this.topTextObj.set('text', this.props.topText);
    this.bottomTextObj.set('text', this.props.bottomText);
    this.fabricCanvas.renderAll();
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
