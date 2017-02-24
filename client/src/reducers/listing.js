import { CHANGE_LISTING_FIELD, UPLOAD_LISTING_IMAGE, GET_LISTING_SUCCESS, DELETE_IMAGE } from '../constants';


export const initialState = {
  listingForm: {
    title: '',
    body: '',
    images: [],
    image: '',
    type: 'Home Improvement',
  },
  userListings: [],
};

export const listing = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LISTING_FIELD:
      return ({ ...state, listingForm: { ...state.listingForm, [action.field]: action.value } });
    case UPLOAD_LISTING_IMAGE:
      return ({ ...state, listingForm: { ...state.listingForm, images: [...state.listingForm.images, action.value] } });
    case GET_LISTING_SUCCESS:
      return ({ ...state, userListings: action.payload });
    case DELETE_IMAGE:
      const spliced = [...state.listingForm.images];
      spliced.splice(action.index, 1);
      return ({ ...state, listingForm: { ...state.listingForm, images: spliced } });
    default:
      return state;
  }
};
