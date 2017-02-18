import { TOGGLE_SIGNUP } from '../constants'

export const initialState = {
  user: {name: "Cory", email: "wolnewitz@gmail.com"},
  signupForm: {link: "customer"}
}

export const app = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIGNUP:
      return Object.assign({}, state, {link: action.link});
    default:
      return state;
  }
}
