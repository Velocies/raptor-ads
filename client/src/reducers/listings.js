import { FETCHING_LISTINGS, GET_ALL_LISTINGS_SUCCESS, CHANGE_SEARCH_FIELD, CHANGE_FILTER_CATEGORY } from '../constants';


export const initialState = {
  allListings: [],
  isFetching: false,
  searchField: '',
  filters: {
    categories: {
      'Home Improvement': false,
      Technology: false,
    },
    distance: false,
  },
};

export const listings = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LISTINGS_SUCCESS:
      return ({ ...state, allListings: action.payload, isFetching: false });
    case FETCHING_LISTINGS:
      return ({ ...state, isFetching: true });
    case CHANGE_SEARCH_FIELD:
      return ({ ...state, searchField: action.value });
    case CHANGE_FILTER_CATEGORY:
      return ({ ...state, filters: { ...state.filters, categories: {...state.filters.categories, [action.category]: !state.filters.categories[action.category] } } });
    default:
      return state;
  }
};
