import firebase from '../firebase';
import PMApiClient from '../apiUtil';

const login = (user) => {
  return {
    type: 'LOGIN',
    user: user,
  };
};

const failLogin = (error) => {
  return {
    type: 'LOGIN_FAIL',
    error: error,
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

const validateUser = (dispatch, user) => {
  user.getToken().then((token) => {
    const api = new PMApiClient(token);
    api.api('/api/tokensignin').then((userData) => {
      dispatch(login(userData));
    }).catch((error) => {
      dispatch(failLogin(error));
    });
  });
};

const updateUsername = (dispatch, name) => {
  return new Promise((resolve) => {
    firebase.auth().currentUser.getToken().then((token) => {
      const api = new PMApiClient(token);
      api.api('/api/user/name', { name }, 'POST').then((userData) => {
        dispatch(login(userData));
        resolve();
      });
    });
  });
};

export default {
  validateUser,
  updateUsername,
  login,
  failLogin,
  logout,
};
