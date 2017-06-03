import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';

import createHistory from 'history/createBrowserHistory';

import plugMemeApp from './reducers';

import Navbar from './components/Navbar';
import LoginModal from './components/modal/LoginModal';
import LogoutModal from './components/modal/LogoutModal';

import Home from './components/Home';
import Editor from './components/editor';
import Profil from './components/Profil';
import Recherche from './components/Recherche';

import './app.scss';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(plugMemeApp, {}, applyMiddleware(middleware));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/editeur" component={Editor} />
        <Route path="/profil" component={Profil} />
        <Route path="/recherche" component={Recherche} />
        <LoginModal />
        <LogoutModal />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
