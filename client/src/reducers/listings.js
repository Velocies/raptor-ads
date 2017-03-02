import { FETCHING_LISTINGS, GET_ALL_LISTINGS_SUCCESS, CHANGE_SEARCH_FIELD } from '../constants';


export const initialState = {
  allListings: [],
  isFetching: false,
  searchField: '',
};

export const listings = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LISTINGS_SUCCESS:
      return ({ ...state, allListings: action.payload, isFetching: false });
    case FETCHING_LISTINGS:
      return ({ ...state, isFetching: true});
    case CHANGE_SEARCH_FIELD:
      return ({ ...state, searchField: action.value });
    default:
      return state;
  }
};
