const userMemes = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_MEME':
      return {
        ...state,
        festhTime: action.festhTime,
        memes: action.memes,
      };
    default:
      return state;
  }
};

export default userMemes;
