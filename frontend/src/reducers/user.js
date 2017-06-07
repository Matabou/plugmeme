const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGIN_FAIL':
      return null;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export default user;
