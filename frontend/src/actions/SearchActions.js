import PMApiClient from '../apiUtil';

const setSearchMeme = (memes) => {
  return {
    type: 'SET_SEARCH_MEME',
    fecthTime: Date.now(),
    memes,
  };
};

const fetchSearchMeme = (dispatch, title, sort) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api('/api/memes/search', { title, sort }, 'POST').then((response) => {
      dispatch(setSearchMeme(response.data));
      resolve();
    });
  });
};

const updateMemeGrade = (memeId, inc) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api('/api/memes/grade', { memeId, inc }, 'POST').then(() => {
      resolve();
    });
  });
};


export default {
  fetchSearchMeme,
  updateMemeGrade,
};
