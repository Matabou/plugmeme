import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToolsPan from './ToolsPan';
import ImagesPan from './ImagesPan';
import EditorArea from './EditorArea';
import SaveMemeModal from './../modal/SaveMemeModal';

import ModalActions from '../../actions/ModalActions';

import successKid from '../../../public/media/success-kid.jpg';
import badLuckBrian from '../../../public/media/bad-luck-brian.jpg';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleTopTextChange = this.handleTopTextChange.bind(this);
    this.handleBottomTextChange = this.handleBottomTextChange.bind(this);
    this.handleImageRefreshed = this.handleImageRefreshed.bind(this);
    this.handleFinish = this.handleFinish.bind(this);

    this.images = [];
    this.images.push({
      id: 1,
      name: 'Success Kid',
      src: successKid,
    });
    this.images.push({
      id: 2,
      name: 'Bad Luck Brian',
      src: badLuckBrian,
    });

    this.state = {
      image: successKid,
      topText: '',
      bottomText: '',
      needRefreshImage: false,
      finishMeme: null,
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

  handleFinish(image) {
    this.setState({ finishMeme: image });
    this.props.dispatch(ModalActions.displayModal('SAVE_MEME'));
  }

  render() {
    if (!this.props.user) return (<div />);

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
          onFinish={this.handleFinish}
        />
        <ImagesPan
          images={this.images}
          onImageChange={this.handleImageChange}
        />
        <SaveMemeModal
          finishMeme={this.state.finishMeme}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Editor);
