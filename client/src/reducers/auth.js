import { TOGGLE_SIGNUP_FORM } from '../constants'

export const initialState = {
  signupForm: {activeLink: "customer"}
}

export const auth = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIGNUP_FORM:
      return Object.assign({}, state, {signupForm: {activeLink: action.link}});
    default:
      return state;
  }
}
