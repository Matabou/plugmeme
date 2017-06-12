import PMApiClient from '../apiUtil';

const setHOFMostLiked = (mostLikedUsers) => {
  return {
    type: 'SET_HOF_MOSTLIKED',
    mostLikedUsers,
  };
};

const fetchHOFMostLiked = (dispatch) => {
  const api = new PMApiClient();

  api.api('/api/halloffame/mostliked').then((response) => {
    dispatch(setHOFMostLiked(response.data));
  });
};

const setHOFMostClicks = (mostClicksUsers) => {
  return {
    type: 'SET_HOF_MOSTCLICKS',
    mostClicksUsers,
  };
};

const fetchHOFMostClicked = (dispatch) => {
  const api = new PMApiClient();

  api.api('/api/halloffame/mostclicks').then((response) => {
    dispatch(setHOFMostClicks(response.data));
  });
};

export default {
  fetchHOFMostLiked,
  fetchHOFMostClicked,
};
