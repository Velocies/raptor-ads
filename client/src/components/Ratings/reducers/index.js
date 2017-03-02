import { START_FETCHING_RATINGS, FAILED_FETCH_RATINGS, FETCH_RATINGS_SUCCESS, CHANGE_RATINGS_FORM_STARS, CHANGE_RATINGS_FORM, POST_RATINGS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  currentUserRatings: {
    firstName: '',
    lastName: '',
    role: 'customer',
    ratings: [],
  },
  ratingsForm: {
    stars: 0,
    content: '',
    user: {
      firstName: '',
      lastName: '',
    },
  },
};

const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_RATINGS:
      return ({ ...state, isFetching: true });
    case FAILED_FETCH_RATINGS:
      return ({ ...state, isFetching: false });
    case CHANGE_RATINGS_FORM_STARS:
      return ({
        ...state,
        ratingsForm: { ...state.ratingsForm, stars: action.newValue },
      });
    case FETCH_RATINGS_SUCCESS:
      return ({
        ...state,
        isFetching: false,
        currentUserRatings: { ...action.payload[0] },
      });
    case CHANGE_RATINGS_FORM:
      return ({
        ...state,
        ratingsForm: { ...state.ratingsForm, [action.target]: action.value },
      });
    case POST_RATINGS_SUCCESS:
      return ({
        ...state,
        ratingsForm: { ...state.ratingsForm, stars: 0, content: '' },
      });
    default:
      return state;
  }
};

export default ratingsReducer;
