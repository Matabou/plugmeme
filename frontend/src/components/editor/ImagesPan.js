import React, { Component } from 'react';

class ImagePan extends Component {
  constructor(props) {
    super(props);

    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(event) {
    this.props.onImageChange(event.target.src);
  }

  render() {
    const listImages = this.props.images.map(image => (
      <div className="box" key={image.id}>
        <figure className="image is-128x128 child">
          <img src={image.src} onClick={this.selectImage} />
        </figure>
      </div>
    ));

    return (
      <div className="level-right">
        <div className="box pic-container">
          {listImages}
        </div>
      </div>
    );
  }
}

export default ImagePan;
