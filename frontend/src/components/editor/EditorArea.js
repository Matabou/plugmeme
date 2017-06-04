import React, { Component } from 'react';
import { fabric } from 'fabric';

class EditorArea extends Component {
  constructor(props) {
    super(props);

    this.refreshCanvas = this.refreshCanvas.bind(this);

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
    this.topTextObj.set('text', this.props.topText);
    this.bottomTextObj.set('text', this.props.bottomText);
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
