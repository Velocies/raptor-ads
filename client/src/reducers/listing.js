import { CHANGE_LISTING_FIELD, UPLOAD_LISTING_IMAGE, GET_LISTINGS_SUCCESS, DELETE_IMAGE, FETCHING_LISTINGS, POST_LISTING_SUCCESS } from '../constants';


export const initialState = {
  listingForm: {
    title: '',
    body: '',
    images: [],
    image: '',
    type: 'Home Improvement',
  },
  userListings: [],
  allListings: [],
};

export const listing = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LISTING_FIELD:
      return ({ ...state, listingForm: { ...state.listingForm, [action.field]: action.value } });
    case UPLOAD_LISTING_IMAGE:
      return ({
        ...state,
        listingForm: { ...state.listingForm, images: [...state.listingForm.images, action.value] },
      });
    case GET_LISTINGS_SUCCESS:
      return ({ ...state, userListings: action.payload, isFetching: false });
    case POST_LISTING_SUCCESS:
      return ({ ...state, listingForm: initialState.listingForm });
    case DELETE_IMAGE:
      const spliced = [...state.listingForm.images];
      spliced.splice(action.index, 1);
      return ({ ...state, listingForm: { ...state.listingForm, images: spliced } });
    default:
      return state;
  }
};
