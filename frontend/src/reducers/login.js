const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.user,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        user: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default login;
