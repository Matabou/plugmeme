const userMemes = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_MEME':
      return {
        ...state,
        fecthTime: action.fecthTime,
        memes: action.memes,
      };
    default:
      return state;
  }
};

export default userMemes;
