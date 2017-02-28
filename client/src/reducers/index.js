import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { auth } from './auth';
import { listing } from './listing';
import { listings } from './listings';
import ratings from '../components/Ratings/reducers';

export default combineReducers({
  auth,
  listing,
  listings,
  ratings,
  routing: routerReducer,
});

