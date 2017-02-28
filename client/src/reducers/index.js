import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { auth } from './auth';
import { listing } from './listing';
import { listings } from './listings';
import ratings from '../components/Ratings/reducers';
import { googleMap } from './googleMap';

export default combineReducers({
  auth,
  listing,
  listings,
  ratings,
  googleMap,
  routing: routerReducer,
});

