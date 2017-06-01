import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fetch from './fetch';
import login from './login';

const plugMemeApp = combineReducers({
  fetch,
  login,
  router: routerReducer,
});

export default plugMemeApp;
