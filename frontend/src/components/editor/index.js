import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToolsPan from './ToolsPan';
import ImagesPan from './ImagesPan';
import EditorArea from './EditorArea';
import SaveMemeModal from './../modal/SaveMemeModal';

import ModalActions from '../../actions/ModalActions';

import successKid from '../../../public/media/success-kid.jpg';
import badLuckBrian from '../../../public/media/bad-luck-brian.jpg';
import arnaud from '../../../public/media/arnaud.jpg';
import creepyCondescendingWonka from '../../../public/media/creepy-condescending-wonka.jpg';
import leonardoDicaprioCheers from '../../../public/media/leonardo-dicaprio-cheers.jpg';
import doesSimply from '../../../public/media/does-simply.jpg';
import JoelCourtois from '../../../public/media/JoelCourtois.jpg';
import shutUpAndTakeMyMoney from '../../../public/media/Shut-Up-And-Take-My-Money-Fry-min.jpg';
import putinCookie from '../../../public/media/2osrw.jpg';
import couldBeGreat from '../../../public/media/60501a96acd180b8ecbb3ffa8ee84017.jpg';
import picardWtf from '../../../public/media/Picard-Wtf.jpg';
import goodGuyGreg from '../../../public/media/Good-Guy-Greg.jpg';
import grandmaFindsTheInternet from '../../../public/media/Grandma-Finds-The-Internet.jpg';
import amITheOnlyOneAroundHere from '../../../public/media/Am-I-The-Only-One-Around-Here.jpg';
import ancientAliens from '../../../public/media/Ancient-Aliens.jpg';
import futuramaFry from '../../../public/media/Futurama-Fry.jpg';
import batman from '../../../public/media/15lggb.jpg';



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
      name: 'creepyCondescendingWonka',
      src: creepyCondescendingWonka,
    });
    this.images.push({
      id: 3,
      name: 'Bad Luck Brian',
      src: badLuckBrian,
    });
    this.images.push({
      id: 4,
      name: 'leonardoDicaprioCheers',
      src: leonardoDicaprioCheers,
    });
    this.images.push({
      id: 5,
      name: 'doesSimply',
      src: doesSimply,
    });
    this.images.push({
      id: 6,
      name: 'arnaud',
      src: arnaud,
    });
    this.images.push({
      id: 7,
      name: 'JoelCourtois',
      src: JoelCourtois,
    });
    this.images.push({
      id: 8,
      name: 'putinCookie',
      src: putinCookie,
    });
    this.images.push({
      id: 9,
      name: 'shutUpAndTakeMyMoney',
      src: shutUpAndTakeMyMoney,
    });
    this.images.push({
      id: 10,
      name: 'couldBeGreat',
      src: couldBeGreat,
    });
    this.images.push({
      id: 11,
      name: 'picardWtf',
      src: picardWtf,
    });
    this.images.push({
      id: 12,
      name: 'goodGuyGreg',
      src: goodGuyGreg,
    });
    this.images.push({
      id: 13,
      name: 'grandmaFindsTheInternet',
      src: grandmaFindsTheInternet,
    });
    this.images.push({
      id: 14,
      name: 'amITheOnlyOneAroundHere',
      src: amITheOnlyOneAroundHere,
    });
    this.images.push({
      id: 15,
      name: 'ancientAliens',
      src: ancientAliens,
    });
    this.images.push({
      id: 16,
      name: 'futuramaFry',
      src: futuramaFry,
    });
    this.images.push({
      id: 17,
      name: 'batman',
      src: batman,
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
