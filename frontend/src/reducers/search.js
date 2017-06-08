const search = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_MEME':
      return {
        ...state,
        fecthTime: action.fecthTime,
        memes: action.memes,
      };
    default:
      return state;
  }
};

export default search;
