import React, { Component } from 'react';

class ImagePan extends Component {
  constructor(props) {
    super(props);

    this.images = [
      'https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg',
      'https://imgflip.com/s/meme/Ancient-Aliens.jpg',
      'https://imgflip.com/s/meme/Futurama-Fry.jpg',
      'https://imgflip.com/s/meme/X-Everywhere.jpg',
      'https://imgflip.com/s/meme/Leonardo-Dicaprio-Cheers.jpg',
      'https://imgflip.com/s/meme/That-Would-Be-Great.jpg',
      'https://imgflip.com/s/meme/Third-World-Skeptical-Kid.jpg',
      'https://imgflip.com/s/meme/X-All-The-Y.jpg',
      'https://imgflip.com/s/meme/Say-That-Again-I-Dare-You.jpg',
      'https://imgflip.com/s/meme/Archer.jpg',
      'https://imgflip.com/s/meme/Kill-Yourself-Guy.jpg'
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
