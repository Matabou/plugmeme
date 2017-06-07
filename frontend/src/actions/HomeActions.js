import PMApiClient from '../apiUtil';

const setHomeMeme = (memes) => {
  return {
    type: 'SET_HOME_MEME',
    fecthTime: Date.now(),
    memes,
  };
};

const fetchHomeMemeIfNeeded = (dispatch, curState) => {
  return new Promise((resolve) => {
    if (curState.fecthTime) {
      const delay = Date.now() - curState.fecthTime;

      // Fetch only if the last fetch was 1min ago
      if (delay < 60000) {
        resolve();
        return;
      }
    }

    const api = new PMApiClient();

    api.api('/api/memes/home').then((response) => {
      dispatch(setHomeMeme(response.data));
      resolve();
    });
  });
};

export default {
  fetchHomeMemeIfNeeded,
};
