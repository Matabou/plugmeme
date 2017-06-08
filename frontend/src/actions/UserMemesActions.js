import PMApiClient from '../apiUtil';

const uploadMeme = (dispatch, memeData) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api('/api/memes', { memeData }, 'POST').then(() => {
      resolve();
    });
  });
};

const deleteMeme = (memeId) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api('/api/memes', { memeId }, 'DELETE').then(() => {
      resolve();
    });
  });
};

const updateMemeShare = (memeId, share) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api('/api/memes', { memeId, share }, 'PUT').then(() => {
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

      if (delay < 20000) {
        resolve();
        return;
      }
    }

    // Just to display this nice loader ^^
    setTimeout(() => {
      const api = new PMApiClient();

      api.api(`/api/memes/user/${userId}`).then((response) => {
        dispatch(setUserMeme(response.data));
        resolve();
      });
    }, 500);
  });
};

export default {
  uploadMeme,
  deleteMeme,
  updateMemeShare,
  fetchUserMemeIfNeeded,
};
