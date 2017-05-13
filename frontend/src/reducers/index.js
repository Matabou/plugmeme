import { combineReducers } from 'redux';
import fetch from './fetch';

const plugMemeApp = combineReducers({
  fetch,
});

export default plugMemeApp;
