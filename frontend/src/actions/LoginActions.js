export const displayLoginModal = () => {
  return {
    type: 'DISPLAY_MODAL',
    isLogin: true,
  };
};

export const displayInscriptionModal = () => {
  return {
    type: 'DISPLAY_MODAL',
    isLogin: false,
  };
};

export const displayLogoutModal = () => {
  return {
    type: 'DISPLAY_LOGOUT_MODAL',
  };
};

export const cancelModal = () => {
  return {
    type: 'CANCEL_DISPLAY_MODAL',
  };
};

export const cancelLogoutModal = () => {
  return {
    type: 'CANCEL_DISPLAY_LOGOUT_MODAL',
  };
};

export const login = (user) => {
  return {
    type: 'LOGIN',
    user: user,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

