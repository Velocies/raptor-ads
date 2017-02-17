import { TOGGLE_NAVIGATION } from '../src/constants.js'

const initialState = {
  activeLink: 'Home',
  user: {name: "Cory", email: "wolnewitz@gmail.com"}
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return Object.assign({}, state, {activeLink: action.link});
    default: {
      return state;
    }
  }
}

export default rootReducer;
