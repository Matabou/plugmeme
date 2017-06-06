import { routerReducer } from 'react-router-redux';

import login from './login';
import modal from './modal';

const rootReducer = {
  modal,
  login,
  router: routerReducer,
};

export default rootReducer;
