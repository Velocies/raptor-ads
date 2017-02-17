import { TOGGLE_NAVIGATION } from '../src/constants.js'

const initialState = {
  activeLink: 'Home',
  user: {name: "Cory", email: "wolnewitz@gmail.com"}
}

const rootReducer = (state=initialState, action) => {
  console.log('action received', action)
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return Object.assign({}, state, {activeLink: action.link});
    default: {
      console.log('here')
      return state;
    }
  }
}

export default rootReducer;
