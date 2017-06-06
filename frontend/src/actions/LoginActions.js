import PMApiClient from '../apiUtil';

const validateToken = (dispatch, token) => {
  return (dispatch, getState) => {
    const api = new PMApiClient(token);
    api.api('/api/tokensignin').then((data) => {
      console.log('this is the data ', data);
    }).catch((error) => {
      console.log('request failed', error);
    });
  };
};

const login = (user) => {
  return {
    type: 'LOGIN',
    user: user,
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export default {
  validateToken,
  login,
  logout,
};
