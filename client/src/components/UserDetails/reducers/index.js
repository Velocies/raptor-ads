import { START_FETCHING_USER, USER_DETAILS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  currentUserDetails: {
    firstName: '',
    lastName: '',
    createdAt: '',
  },
};


export default (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_USER:
      return ({ ...state, isFetching: true });
    case USER_DETAILS_SUCCESS:
      return ({ ...state,
        isFetching: false,
        currentUserDetails: { ...state.currentUserDetails, ...action.payload },
      });
    default:
      return state;
  }
};
