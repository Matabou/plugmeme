const home = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HOME_MEME':
      return {
        ...state,
        fecthTime: action.fecthTime,
        memes: action.memes,
      };
    default:
      return state;
  }
};

export default home;
