const feth = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_IMAGES':
      return {
        ...state,
        isRequesting: true,
        isFetching: false,
      };
    case 'FETCH_IMAGES':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_IMAGES':
      return {
        ...state,
        isRequesting: false,
        nextId: action.id,
      };
    default:
      return state;
  }
};

export default feth;
