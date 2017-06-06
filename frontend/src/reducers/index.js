import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login';
import modal from './modal';

const plugMemeApp = combineReducers({
  modal,
  login,
  router: routerReducer,
});

export default plugMemeApp;
