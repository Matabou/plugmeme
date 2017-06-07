import PMApiClient from '../apiUtil';

const uploadMeme = (dispatch, memeData) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api('/api/memes', { memeData }, 'POST').then((data) => {
      console.log(data);
      resolve();
    });
  });
};

const setUserMeme = (memes) => {
  return {
    type: 'SET_USER_MEME',
    festhTime: Date.now(),
    memes,
  };
};

const fetchUserMemeIfNeeded = (dispatch, userId) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api(`/api/memes/user/${userId}`).then((data) => {
      dispatch(setUserMeme(data));
      resolve();
    });
  });
};

export default {
  uploadMeme,
  fetchUserMemeIfNeeded,
};
