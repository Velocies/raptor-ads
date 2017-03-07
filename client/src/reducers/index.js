import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { auth } from './auth';
import { listing } from './listing';
import { listings } from './listings';
import { messages } from './messages';
import ratings from '../components/Ratings/reducers';
import { googleMap } from './googleMap';
import { profile } from './profile';
import userDetails from '../components/UserDetails/reducers';
import { LOGOUT } from '../constants';
import { inbox } from './inbox';

const appReducer = combineReducers({
  auth,
  profile,
  listing,
  messages,
  inbox,
  listings,
  ratings,
  userDetails,
  googleMap,
  routing: routerReducer,
});

export default (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
