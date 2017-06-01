import React from 'react';

export default function Memes(memes) {
  return (
    <div className="memes">
      {
        memes.map((meme) => {
          return (
            <div className="card meme" key={meme.id}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="content" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <nav className="level">
                    <div className="level-left">
                      <a className="level-item button is-success">
                        <span className="icon">
                          <i className="fa fa-share-alt" />
                        </span>
                        <span>Partager</span>
                      </a>
                    </div>
                    <div className="level-right">
                      <a className="level-item button is-danger">
                        <span className="icon">
                          <i className="fa fa-trash" />
                        </span>
                        <span>Supprimer</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
