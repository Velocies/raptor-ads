import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { auth } from './auth';
import { listing } from './listing';
import { listings } from './listings';
import ratings from '../components/Ratings/reducers';
import { googleMap } from './googleMap';
import { profile } from './profile';
import userDetails from '../components/UserDetails/reducers';

export default combineReducers({
  auth,
  profile,
  listing,
  listings,
  ratings,
  userDetails,
  googleMap,
  routing: routerReducer,
});
