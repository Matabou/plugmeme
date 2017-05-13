import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import plugMemeApp from './reducers';
import App from './components/App';

import './styles.css';

const store = createStore(plugMemeApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
