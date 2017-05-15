const login = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_MODAL':
      return {
        ...state,
        isModalOpen: true,
        isLogin: action.isLogin,
      };
    case 'DISPLAY_LOGOUT_MODAL':
      return {
        ...state,
        isModalLogoutOpen: true,
      };
    case 'CANCEL_DISPLAY_MODAL':
      return {
        ...state,
        isModalOpen: false,
      };
    case 'CANCEL_DISPLAY_LOGOUT_MODAL':
      return {
        ...state,
        isModalLogoutOpen: false,
      };
    case 'LOGIN':
      return {
        ...state,
        isModalOpen: false,
        user: action.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isModalLogoutOpen: false,
        user: null,
      };
    default:
      return state;
  }
};

export default login;
