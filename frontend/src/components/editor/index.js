import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToolsPan from './ToolsPan';
import ImagesPan from './ImagesPan';
import EditorArea from './EditorArea';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleTopTextChange = this.handleTopTextChange.bind(this);
    this.handleBottomTextChange = this.handleBottomTextChange.bind(this);
    this.handleImageRefreshed = this.handleImageRefreshed.bind(this);
    this.state = {
      image: 'https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg',
      topText: '',
      bottomText: '',
      needRefreshImage: false
    };
  }

  handleImageChange(imagePath) {
    this.setState({ image: imagePath });
    this.setState({ needRefreshImage: true });
  }

  handleImageRefreshed() {
    this.setState({ needRefreshImage: false });
  }

  handleTopTextChange(text) {
    this.setState({ topText: text });
  }

  handleBottomTextChange(text) {
    this.setState({ bottomText: text });
  }

  render() {
    const topText = this.state.topText;
    const bottomText = this.state.bottomText;
    const image = this.state.image;
    const needRefreshImage = this.state.needRefreshImage;
    return (
      <div className="level">
        <ToolsPan
          topText={topText}
          bottomText={bottomText}
          onTopTextChange={this.handleTopTextChange}
          onBottomTextChange={this.handleBottomTextChange}
        />
        <EditorArea
          topText={topText}
          bottomText={bottomText}
          image={image}
          needRefreshImage={needRefreshImage}
          handleImageRefreshed={this.handleImageRefreshed}
        />
        <ImagesPan onImageChange={this.handleImageChange} />
      </div>
    );
  }
}

export default connect()(Editor);
