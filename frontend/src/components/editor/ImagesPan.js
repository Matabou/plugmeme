import React, { Component } from 'react';

class ImagePan extends Component {
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
      <div className="level-right">
        <div className="box">
          <div className="box">
            <figure className="image is-128x128 child">
              <img src="http://bulma.io/images/placeholders/256x256.png" />
            </figure>
          </div>
          <div className="box">
            <figure className="image is-128x128 child">
              <img src="http://bulma.io/images/placeholders/256x256.png" />
            </figure>
          </div>
          <div className="box">
            <figure className="image is-128x128 child">
              <img src="http://bulma.io/images/placeholders/256x256.png" />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePan;
