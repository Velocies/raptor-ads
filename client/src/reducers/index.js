import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { auth } from './auth';
import { listing } from './listing';
import { listings } from './listings';
import ratings from '../components/Ratings/reducers';
import { googleMap } from './googleMap';
import { profile } from './profile';

export default combineReducers({
  auth,
  profile,
  listing,
  listings,
  ratings,
  googleMap,
  routing: routerReducer,
});
