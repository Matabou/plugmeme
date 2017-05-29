import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import plugMemeApp from './reducers';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/modal/LoginModal';
import LogoutModal from './components/modal/LogoutModal';

import App from './components';
import Editor from './components/Editor';
import Memes from './components/Memes';
import Recherche from './components/Recherche';

import './app.scss';

const store = createStore(plugMemeApp);

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={App} />
        <Route path="/editeur" component={Editor} />
        <Route path="/memes" component={Memes} />
        <Route path="/recherche" component={Recherche} />
        <LoginModal />
        <LogoutModal />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
