import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD, ADD_SIGNUP_ERROR, CLEAR_ERRORS, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT, CHANGE_LOGIN_FIELD, LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_PROFILE_SUCCESS  } from '../constants';

export const initialState = {
  signupForm: {
    activeLink: 'customer',
    firstName: '',
    email: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    password: '',
    passwordConfirmation: '',
    companyName: '',
    companyAddress: '',
    companyCity: '',
    companyZip: '',
    companyState: '',
    license: '',
  },
  loginForm: {
    email: '',
    password: '',
  },
  formErrors: {
  },
  loggedInUser: {
    firstName: '',
    id: 0,
    business: {},
  },
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIGNUP_FORM:
      return ({ ...state, signupForm: { ...state.signupForm, activeLink: action.link } });
    case CHANGE_SIGNUP_FIELD:
      return ({ ...state, signupForm: { ...state.signupForm, [action.field]: action.value } });
    case CHANGE_LOGIN_FIELD:
      return ({ ...state, loginForm: { ...state.loginForm, [action.name]: action.value } });
    case ADD_SIGNUP_ERROR:
      return ({ ...state, formErrors: { ...state.formErrors, [action.error]: action.message } });
    case CLEAR_ERRORS:
      return ({ ...state, formErrors: {} });
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return ({
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          ...action.data.user,
          business: {
            ...state.loggedInUser.business,
            ...action.data.user.business,
          },
        },
        signupForm: { ...state.signupForm, ...initialState.signupForm },
        loginForm: { ...state.loginForm, ...initialState.loginForm },
      });
    case SIGNUP_FAILURE:
      return ({ ...state, formErrors: { ...state.formErrors, userExists: 'A user with that email exists' } });
    case LOGIN_FAILURE:
      return ({ ...state, formErrors: { ...state.formErrors, invalidPass: 'Invalid credentials' } });
    case UPDATE_PROFILE_SUCCESS:
      return ({ ...state, loggedInUser: { ...state.loggedInUser, ...action.data } });
    default:
      return state;
  }
};
