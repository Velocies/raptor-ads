import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD } from '../constants';

export const initialState = {
  signupForm: {
    activeLink: 'customer',
    firstName: '',
    email: '',
    lastName: '',
    businessName: '',
    password: '',
    passwordConfirmation: '',
  },
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIGNUP_FORM:
      return ({ ...state, signupForm: { ...state.signupForm, activeLink: action.link } });
    case CHANGE_SIGNUP_FIELD:
      return ({ ...state, signupForm: { ...state.signupForm, [action.field]: action.value } });
    default:
      return state;
  }
};
