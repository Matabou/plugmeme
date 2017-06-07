import { routerReducer } from 'react-router-redux';

import user from './user';
import modal from './modal';

const rootReducer = {
  modal,
  user,
  router: routerReducer,
};

export default rootReducer;
