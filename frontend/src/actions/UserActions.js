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
    api.api('/api/user/tokensignin').then((userData) => {
      dispatch(login(userData));
    }).catch((error) => {
      dispatch(failLogin(error));
    });
  });
};

const updateUsername = (name) => {
  return {
    type: 'UPDATE_NAME',
    name,
  };
};

const updateUsernamePromise = (dispatch, name) => {
  return new Promise((resolve) => {
    firebase.auth().currentUser.getToken().then((token) => {
      const api = new PMApiClient(token);
      api.api('/api/user/name', { name }, 'POST').then((userData) => {
        dispatch(updateUsername(userData));
        resolve();
      });
    });
  });
};

const updateAvatar = (avatar) => {
  return {
    type: 'UPDATE_AVATAR',
    avatar,
  };
};

const updateAvatarPromise = (dispatch, avatar) => {
  return new Promise((resolve) => {
    firebase.auth().currentUser.getToken().then((token) => {
      const api = new PMApiClient(token);
      api.apiImage('/api/user/avatar', avatar, 'POST').then((userData) => {
        dispatch(updateAvatar(userData));
        resolve();
      });
    });
  });
};

const updateAvatarURL = (url) => {
  return {
    type: 'UPDATE_AVATAR_URL',
    url,
  };
};

const getAvatarPromise = (dispatch, avatar) => {
  return new Promise((resolve) => {
    firebase.auth().currentUser.getToken().then((token) => {
      const api = new PMApiClient(token);
      api.api(`/api/user/avatar/${avatar}`, undefined, 'GET', false).then((data) => {
        dispatch(updateAvatarURL(data.url));
        resolve();
      });
    });
  });
};

export default {
  validateUser,
  updateUsernamePromise,
  updateAvatarPromise,
  getAvatarPromise,
  login,
  failLogin,
  logout,
};
