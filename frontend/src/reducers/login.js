const login = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_LOGIN':
      return {
        ...state,
        isModalOpen: true,
      };
    case 'CANCEL_DISPLAY_LOGIN':
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default login;
