import { FETCHING_LISTINGS, GET_ALL_LISTINGS_SUCCESS } from '../constants';


export const initialState = {
  userListings: [],
  allListings: [],
  isFetching: false,
};

export const listings = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LISTINGS_SUCCESS:
      return ({ ...state, allListings: action.payload, isFetching: false });
    case FETCHING_LISTINGS:
      return ({ ...state, isFetching: true});
    default:
      return state;
  }
};
