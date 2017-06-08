const search = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'SET_SEARCH_MEME':
      return {
        ...state,
        fecthTime: action.fecthTime,
        memes: action.memes,
      };
    case 'INC_SEARCH_LOADING':
      if (!newState.loading) newState.loading = [];
      if (!newState.loading[action.id]) newState.loading[action.id] = 0;

      newState.loading[action.id] += action.inc;

      return newState;
    case 'RESET_SEARCH_LOADING':

      delete newState.loading[action.id];

      return newState;
    default:
      return state;
  }
};

export default search;
