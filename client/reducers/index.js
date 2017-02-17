import { TOGGLE_NAVIGATION } from '../src/constants.js'

const initialState = {
  user: {name: "Cory", email: "wolnewitz@gmail.com"}
}

const rootReducer = (state=initialState, action) => {
  console.log(action)
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return Object.assign({}, state, {activeLink: action.link});
    default: {
      return state;
    }
  }
}

export default rootReducer;
