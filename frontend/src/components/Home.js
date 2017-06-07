import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';

import chabroA from '../../public/media/chabro_a.jpg';
import cormerB from '../../public/media/cormer_b.jpg';
import lehuenA from '../../public/media/lehuen_a.jpg';

import HomeActions from '../actions/HomeActions';

class Home extends Component {
  componentWillMount() {
    HomeActions.fetchHomeMemeIfNeeded(
      this.props.dispatch,
      this.props.home,
    );
  }

  render() {
    const homeMemes = this.props.home.memes;

    return (
      <div className="home">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="profile container">
              <div className="has-text-centered">
                <h1 className="title">
                  PlugMeme
                </h1>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <h1>Le projet PlugMeme</h1>
          <hr />
          <p>Le projet PlugMeme est un éditeur de meme permettant
            de partager ces plus belles créations. Pour pouvoir
            commencer votre création de meme vous devrez vous créer
            un compte sur ce magnifique site. Vous pouvez aussi
            des a présent rechercher les meilleurs memes de la plateforme.
            Un système de vote est aussi en place vous permettant de
            mettre en avant les créations que vous préférez.</p>
          <p>Ce projet a été produit par la team PlugTeam dans
            le cadre du projet Js du premier semestre de l'année MTI au sein de l'EPITA.</p>
        </div>
        {homeMemes &&
        <section className="hero is-light">
          <div className="hero-body best-memes">
            <div className="container">
              <h1>Selection de Memes</h1>
              <hr />
              <div className="columns has-text-centered">
                <div className="column is-one-third">
                  <h2>Meilleur Memes</h2>
                  { homeMemes.best.map((meme) => {
                    return (
                      <figure className="image is-4by3" key={meme.id}>
                        <img src={meme.data} alt={meme.title} />
                      </figure>
                    );
                  })
                  }
                </div>
                <div className="column">
                  <h2>Nouveaux Memes</h2>
                  { homeMemes.new.map((meme) => {
                    return (
                      <figure className="image is-4by3" key={meme.id}>
                        <img src={meme.data} alt={meme.title} />
                      </figure>
                    );
                  })
                  }
                </div>
                <div className="column">
                  <h2>Memes Aleatoire</h2>
                  { homeMemes.rand.map((meme) => {
                    return (
                      <figure className="image is-4by3" key={meme.id}>
                        <img src={meme.data} alt={meme.title} />
                      </figure>
                    );
                  })
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        }
        <div className="container equipe">
          <h1>La Team</h1>
          <hr />
          <div className="columns has-text-centered">
            <div className="column is-one-third">
              <div className="box">
              <figure className="image image-is-centered image-equipe">
                <img src={chabroA} alt="content" />
                <h3>Alexandre Chabrolin</h3>
              </figure>
              </div>
            </div>
            <div className="column">
              <div className="box">
              <figure className="image image-is-centered image-equipe">
                <img src={cormerB} alt="content" />
                <h3>Antoine Cormerais</h3>
              </figure>
              </div>
            </div>
            <div className="column">
              <div className="box">
              <figure className="image image-is-centered image-equipe">
                <img src={lehuenA} alt="content" />
                <h3>Arthur Lehuen</h3>
              </figure>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};


export default connect(mapStateToProps)(Home);
