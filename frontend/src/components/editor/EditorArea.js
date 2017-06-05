import React, { Component } from 'react';
import { fabric } from 'fabric';

class EditorArea extends Component {
  constructor(props) {
    super(props);

    this.refreshCanvas = this.refreshCanvas.bind(this);

    this.fabricCanvas = new fabric.Canvas(this.refs.canvas);
    this.topTextObj = new fabric.Text(this.props.topText.toUpperCase(), {
      left: 300,
      top: 100,
      fontFamily: 'Impact',
      fontSize: 50,
      stroke: '#000000',
      strokeWidth: 1,
      fill: '#ffffff'
    });
    this.bottomTextObj = new fabric.Text(this.props.bottomText.toUpperCase(), {
      left: 300,
      top: 400,
      fontFamily: 'Impact',
      fontSize: 50,
      stroke: '#000000',
      strokeWidth: 1,
      fill: '#ffffff'
    });
  }

  componentDidMount() {
    this.fabricCanvas = new fabric.Canvas(this.refs.canvas);
    this.fabricCanvas.setBackgroundImage(this.props.image, () => {
      this.refreshCanvas();
    });
    this.fabricCanvas.add(this.topTextObj);
    this.fabricCanvas.add(this.bottomTextObj);
  }

  refreshCanvas() {
    this.fabricCanvas.backgroundImage.scaleToWidth(this.fabricCanvas.width);
    this.fabricCanvas.backgroundImage.scaleToHeight(this.fabricCanvas.height);
    this.fabricCanvas.centerObject(this.fabricCanvas.backgroundImage);
    this.fabricCanvas.renderAll();
  }

  render() {
    this.topTextObj.set('text', this.props.topText.toUpperCase());
    this.bottomTextObj.set('text', this.props.bottomText.toUpperCase());
    this.fabricCanvas.renderAll();
    if (this.props.needRefreshImage) {
      this.fabricCanvas.setBackgroundImage(this.props.image, () => {
        this.refreshCanvas();
        this.props.handleImageRefreshed();
      });
    }
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
