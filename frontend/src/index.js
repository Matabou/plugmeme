import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router';

import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';

import Navbar from './components/Navbar';
import LoginModal from './components/modal/LoginModal';
import InscriptionModal from './components/modal/InscriptionModal';
import LogoutModal from './components/modal/LogoutModal';

import Home from './components/Home';
import Editor from './components/editor';
import Profil from './components/profil';
import Recherche from './components/Recherche';
import HallOfFame from './components/hallOfFame';

import './app.scss';

const history = createHistory();

const middlewares = [
  thunk,
  routerMiddleware(history),
];

const store = createStore(
  combineReducers(rootReducer),
  {},
  applyMiddleware(...middlewares),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/editeur" component={Editor} />
        <Route path="/profil" component={Profil} />
        <Route path="/recherche" component={Recherche} />
        <Route path="/halloffame" component={HallOfFame} />
        <LoginModal />
        <LogoutModal />
        <InscriptionModal />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
