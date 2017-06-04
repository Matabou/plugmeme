import React, { Component } from 'react';

class ImagePan extends Component {
  constructor(props) {
    super(props);

    this.images = [
      'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg',
      'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
      'https://www.w3schools.com/css/img_fjords.jpg',
      'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg',
      'http://keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg',
      'http://i.stack.imgur.com/WCveg.jpg'
    ];

    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(event) {
    this.props.onImageChange(event.target.src);
  }

  render() {
    const listImages = this.images.map((image, index) => (
      <div className="box" key={index}>
        <figure className="image is-128x128 child">
          <img src={image} onClick={this.selectImage} />
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
