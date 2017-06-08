const home = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HOF_MOSTLIKED':
      return {
        ...state,
        mostLikedUsers: action.mostLikedUsers,
      };
    default:
      return state;
  }
};

export default home;
