import { routerReducer } from 'react-router-redux';

import modal from './modal';
import home from './home';
import user from './user';
import userMemes from './userMemes';
import search from './search';
import halloffame from './halloffame';

const rootReducer = {
  modal,
  home,
  user,
  userMemes,
  search,
  halloffame,
  router: routerReducer,
};

export default rootReducer;
