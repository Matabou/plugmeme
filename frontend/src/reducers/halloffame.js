const halloffame = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HOF_MOSTLIKED':
      return {
        ...state,
        mostLikedUsers: action.mostLikedUsers,
      };
    case 'SET_HOF_MOSTCLICKS':
      return {
        ...state,
        mostClicksUsers: action.mostClicksUsers,
      };
    default:
      return state;
  }
};

export default halloffame;
