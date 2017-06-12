const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGIN_FAIL':
      return null;
    case 'LOGOUT':
      return null;
    case 'UPDATE_NAME':
      return {
        ...state,
        username: action.name,
      };
    case 'UPDATE_AVATAR':
      return {
        ...state,
        avatar: action.avatar,
      };
    default:
      return state;
  }
};

export default user;
