import { FETCHING_LISTINGS, GET_ALL_LISTINGS_SUCCESS, CHANGE_SEARCH_FIELD, CHANGE_DISTANCE_RADIUS, CHANGE_FILTER_CATEGORY, CHANGE_SORT_FILTER, CHANGE_MARKER_SHOW_INFO } from '../constants';


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
    sort: false,
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
    case CHANGE_DISTANCE_RADIUS:
      return ({ ...state, filters: { ...state.filters, distance: action.distance } });
    case CHANGE_SORT_FILTER:
      return ({ ...state, filters: { ...state.filters, sort: action.sort } });
    case CHANGE_MARKER_SHOW_INFO:
      const allListingsClone = [...state.allListings];
      allListingsClone[action.index].position = {...allListingsClone[action.index].position};
      allListingsClone[action.index].position.showInfo = !allListingsClone[action.index].position.showInfo;

      console.log('HELLO FROM HERE', allListingsClone);
      return ({ ...state, allListings: allListingsClone });
    default:
      return state;
  }
};
