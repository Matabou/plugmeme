import { routerReducer } from 'react-router-redux';

import modal from './modal';
import home from './home';
import user from './user';
import userMemes from './userMemes';

const rootReducer = {
  modal,
  home,
  user,
  userMemes,
  router: routerReducer,
};

export default rootReducer;
