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
    fecthTime: Date.now(),
    memes,
  };
};

const fetchUserMemeIfNeeded = (dispatch, userId, curState, force = false) => {
  return new Promise((resolve) => {
    if (!force && curState.fecthTime) {
      const delay = Date.now() - curState.fecthTime;

      if (delay < 10000) {
        resolve();
        return;
      }
    }

    // Just to display this nice loader ^^
    setTimeout(() => {
      const api = new PMApiClient();

      api.api(`/api/memes/user/${userId}`).then((data) => {
        dispatch(setUserMeme(data));
        resolve();
      });
    }, 500);
  });
};

export default {
  uploadMeme,
  fetchUserMemeIfNeeded,
};
