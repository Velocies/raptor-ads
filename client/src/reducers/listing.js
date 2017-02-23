import { CHANGE_LISTING_FIELD, UPLOAD_LISTING_IMAGE } from '../constants';


export const initialState = {
  listingForm: {
    title: '',
    body: '',
    images: [],
    image: '',
    type: '',
  },
};

export const listing = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LISTING_FIELD:
      return ({ ...state, listingForm: { ...state.listingForm, [action.field]: action.value } });
    case UPLOAD_LISTING_IMAGE:
      return ({ ...state, listingForm: { ...state.listingForm, images: [...state.listingForm.images, action.value] } });
    default:
      return state;
  }
};
