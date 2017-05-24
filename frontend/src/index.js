import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import plugMemeApp from './reducers';
import App from './components';

import './app.scss';

const store = createStore(plugMemeApp);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
