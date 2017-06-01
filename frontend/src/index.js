import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';

import createHistory from 'history/createBrowserHistory';

import plugMemeApp from './reducers';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/modal/LoginModal';
import LogoutModal from './components/modal/LogoutModal';

import App from './components/App';
import Editor from './components/Editor';
import Memes from './components/Memes';
import Recherche from './components/Recherche';

import './app.scss';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...plugMemeApp,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
