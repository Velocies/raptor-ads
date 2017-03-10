import { FETCHING_LISTINGS, GET_ALL_LISTINGS_SUCCESS, CHANGE_SEARCH_FIELD, CHANGE_DISTANCE_RADIUS, CHANGE_FILTER_CATEGORY, CHANGE_SORT_FILTER, CHANGE_MARKER_SHOW_INFO, CLEAR_CLICKED_LISTING } from '../constants';


export const initialState = {
  allListings: [],
  isFetching: false,
  searchField: '',
  filters: {
    category: '',
    distance: false,
    sort: false,
  },
  clickedListing: null,
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
      return ({ ...state, filters: { ...state.filters, category: action.category.toLowerCase() } });
    case CHANGE_DISTANCE_RADIUS:
      return ({ ...state, filters: { ...state.filters, distance: action.distance } });
    case CHANGE_SORT_FILTER:
      return ({ ...state, filters: { ...state.filters, sort: action.sort } });
    case CHANGE_MARKER_SHOW_INFO:
      const allListingsClone = [...state.allListings];
      allListingsClone[action.index].position = {...allListingsClone[action.index].position};
      allListingsClone[action.index].position.showInfo = !allListingsClone[action.index].position.showInfo;
      return ({ ...state, clickedListing: allListingsClone[action.index], allListings: allListingsClone });
    case CLEAR_CLICKED_LISTING:
      return ({ ...state, clickedListing: null });
    default:
      return state;
  }
};
