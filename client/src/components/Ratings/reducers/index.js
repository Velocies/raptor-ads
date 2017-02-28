const initialState = {
  isFetching: false,
  currentUserRatings: [],
  ratingsForm: {
    stars: 0,
    body: '',
  },
};

const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ratingsReducer;
