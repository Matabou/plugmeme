import PMApiClient from '../apiUtil';

const setSearchMeme = (memes) => {
  return {
    type: 'SET_SEARCH_MEME',
    fecthTime: Date.now(),
    memes,
  };
};

const fetchSearchMeme = (dispatch, title, creator, sort) => {
  return new Promise((resolve) => {
    const api = new PMApiClient();

    api.api('/api/memes/search', { title, creator, sort }, 'POST').then((response) => {
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


const incSearchLoading = (id, inc) => {
  return {
    type: 'INC_SEARCH_LOADING',
    id,
    inc,
  };
};

const resetSearchLoading = (id) => {
  return {
    type: 'RESET_SEARCH_LOADING',
    id,
  };
};

export default {
  fetchSearchMeme,
  updateMemeGrade,
  resetSearchLoading,
  incSearchLoading,
};
