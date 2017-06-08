import { routerReducer } from 'react-router-redux';

import modal from './modal';
import home from './home';
import user from './user';
import userMemes from './userMemes';
import search from './search';

const rootReducer = {
  modal,
  home,
  user,
  userMemes,
  search,
  router: routerReducer,
};

export default rootReducer;
