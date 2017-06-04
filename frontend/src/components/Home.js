import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum augue
            id sapien sodales lacinia.
            Vestibulum ac libero neque. Cras et sagittis risus, non vulputate nisi.
            Nunc felis massa, aliquam id laoreet id
             pretium at odio. Maecenas commodo viverra consectetur.
             Nulla sit amet imperdiet nunc. Sed tortor sapien, porta
             non nisi sit amet, faucibus imperdiet ante. Proin mattis
             dapibus arcu, sit amet finibus urna. Morbi ac
             nim. Praesent lacinia massa vitae orci auctor lacinia. In
             blandit lorem consequat leo lobortis, egestas condim
             ntum arcu blandit. Praesent rhoncus maximus nisi, ultricies
             fringilla odio ornare ac. Proin at diam e</p>
          <p>Us facilisis lacinia. Quisque nec ipsum ac magna pulvinar
             eleifend. Nulla eget aliquet sem. Pellentesq
             e aliquet, orci at bibendum pulvinar, mauris justo fringilla
             ipsum, vitae consequat velit odio euismod
             dolor. Orci varius natoque penatibus et magnis dis parturient
             montes, nascetur ridiculus mus. Pellentes
             ue ut faucibus nisi. Ut rhoncus ultricies quam sed porta
              Nulla egestas sapien at augue molestie, at ultr
             ces tellus pellentesque. Sed eu tincidunt ligula. Proin
             vehicula ornare lacus non consectetur. Ut laoreet
             lacus a mattis hendrerit. Sed malesuada aliquet gravida.
             Pellentesque ac elementum nulla, vulputate tincidunt est.</p>
        </div>
        <section className="hero is-light">
          <div className="hero-body best-memes">
            <div className="container">
              <h1>Selection de Memes</h1>
              <hr />
              <div className="columns has-text-centered">
                <div className="column is-one-third">
                  <h2>Meilleur Memes</h2>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                </div>
                <div className="column">
                  <h2>Nouveaux Memes</h2>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                </div>
                <div className="column">
                  <h2>Memes Aleatoire</h2>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <h1>L equipe</h1>
          <hr />
          <div className="columns has-text-centered">
            <div className="column is-one-third">
              <figure className="image image-is-centered is-128x128">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
              </figure>
              <h3>Alexandre Chabrolin</h3>
            </div>
            <div className="column">
              <figure className="image image-is-centered is-128x128">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
              </figure>
              <h3>Antoine Cormerais</h3>
            </div>
            <div className="column">
              <figure className="image image-is-centered is-128x128">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
              </figure>
              <h3>Arthur Lehuen</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
