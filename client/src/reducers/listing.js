import { CHANGE_LISTING_FIELD } from '../constants';


export const initialState = {
  listingForm: {
    title: '',
    body: '',
    tags: [],
    images: [],
  },
};

export const listing = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LISTING_FIELD:
      return ({ ...state, listingForm: {...state.listingForm, [action.field]: action.value } });
    default:
      return state;
  }
};