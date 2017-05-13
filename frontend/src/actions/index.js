export const requestImages = () => {
  return {
    type: 'REQUEST_IMAGES',
  };
};

export const fetchImages = () => {
  return {
    type: 'FETCH_IMAGES',
  };
};

export const receiveImages = (nextId) => {
  return {
    type: 'RECEIVE_IMAGES',
    id: nextId,
  };
};
