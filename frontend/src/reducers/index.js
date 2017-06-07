import { routerReducer } from 'react-router-redux';

import user from './user';
import modal from './modal';
import userMemes from './userMemes';

const rootReducer = {
  modal,
  user,
  userMemes,
  router: routerReducer,
};

export default rootReducer;
