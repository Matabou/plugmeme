import React, { Component } from 'react';
import { fabric } from 'fabric';

class EditorArea extends Component {
  constructor(props) {
    super(props);

    this.refreshCanvas = this.refreshCanvas.bind(this);

    this.fabricCanvas = new fabric.Canvas(this.refs.canvas);
    this.topTextObj = this.getTextObj(10);
    this.bottomTextObj = this.getTextObj(500);
  }

  componentDidMount() {
    this.fabricCanvas = new fabric.Canvas(this.refs.canvas);
    this.fabricCanvas.setBackgroundImage(this.props.image, () => {
      this.refreshCanvas();
    });
    this.fabricCanvas.add(this.topTextObj);
    this.fabricCanvas.add(this.bottomTextObj);
    this.topTextObj.centerH();
    this.bottomTextObj.centerH();
  }

  getTextObj(top) {
    return new fabric.Text(this.props.topText.toUpperCase(), {
      left: 0,
      top: top,
      fontFamily: 'Impact',
      fontSize: 50,
      stroke: '#000000',
      strokeWidth: 1,
      fill: '#ffffff',
      originX: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      shadow: '5px 5px 10px rgb(0,0,0)'
    });
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
        <div className="tile is-vertical is-4">
          <a className="level-item button is-success">
            <span className="icon">
              <i className="fa fa-floppy-o" />
            </span>
            <span>Sauvegarder</span>
          </a>
        </div>
      </div>
    );
  }
}

export default EditorArea;
