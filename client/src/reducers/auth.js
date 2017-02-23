import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD, ADD_SIGNUP_ERROR, CLEAR_ERRORS, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../constants';

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
  formErrors: {
  },
  loggedInUser: {
  },
  token: '',
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIGNUP_FORM:
      return ({ ...state, signupForm: { ...state.signupForm, activeLink: action.link } });
    case CHANGE_SIGNUP_FIELD:
      return ({ ...state, signupForm: { ...state.signupForm, [action.field]: action.value } });
    case ADD_SIGNUP_ERROR:
      return ({ ...state, formErrors: { ...state.formErrors, [action.error]: action.message } });
    case CLEAR_ERRORS:
      return ({ ...state, formErrors: {} });
    case SIGNUP_SUCCESS:
      return (
        {
          ...state,
          loggedInUser: action.data.createdUser,
          token: action.data.token,
        }
      );
    case SIGNUP_FAILURE:
      return ({ ...state, formErrors: { ...state.formErrors, userExists: 'A user with that email exists' } });
    default:
      return state;
  }
};
