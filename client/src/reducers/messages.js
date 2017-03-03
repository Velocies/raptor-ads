import { } from '../constants';


export const initialState = {
  contactForm: {
    subject: '',
    body: '',
  },
  formErrors: {
  },
  isFetching: false,
};

export const messages = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
