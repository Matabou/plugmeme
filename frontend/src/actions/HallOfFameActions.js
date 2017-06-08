import PMApiClient from '../apiUtil';

const setHOFMostLiked = (mostLikedUsers) => {
  return {
    type: 'SET_HOF_MOSTLIKED',
    mostLikedUsers,
  };
};

const fetchHomeMemeIfNeeded = (dispatch, curState) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api('/api/halloffame/mostliked').then((response) => {
      dispatch(setHOFMostLiked(response.data));
      resolve();
    });
  });
};

export default {
  fetchHomeMemeIfNeeded,
};
