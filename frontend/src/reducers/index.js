import { combineReducers } from 'redux';
import fetch from './fetch';
import login from './login';

const plugMemeApp = combineReducers({
  fetch,
  login,
});

export default plugMemeApp;
