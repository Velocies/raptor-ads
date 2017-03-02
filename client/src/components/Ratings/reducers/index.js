import { START_FETCHING_RATINGS, FAILED_FETCH_RATINGS, FETCH_RATINGS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  currentUserRatings: {
    firstName: '',
    lastName: '',
    role: '',
    ratings: [],
  },
  ratingsForm: {
    stars: 0,
    body: '',
  },
};

const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_RATINGS:
      return ({ ...state, isFetching: true });
    case FAILED_FETCH_RATINGS:
      return ({ ...state, isFetching: false });
    case FETCH_RATINGS_SUCCESS:
      return ({
        ...state,
        isFetching: false,
        currentUserRatings: { ...state.currentUserRatings, ...action.payload },
      });
    default:
      return state;
  }
};

export default ratingsReducer;
