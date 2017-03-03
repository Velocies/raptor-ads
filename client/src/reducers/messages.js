import { CHANGE_CONTACT_FIELD } from '../constants';


export const initialState = {
  contactForm: {
    subject: '',
    message: '',
  },
  formErrors: {
  },
  isFetching: false,
};

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CONTACT_FIELD:
      return ({ ...state, contactForm: { ...state.contactForm, [action.field]: action.value } });

    default:
      return state;
  }
};
