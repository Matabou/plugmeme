const user = (state = {}, action) => {
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
        url: undefined,
      };
    case 'UPDATE_AVATAR_URL':
      return {
        ...state,
        url: action.url,
      };
    default:
      return state;
  }
};

export default user;
