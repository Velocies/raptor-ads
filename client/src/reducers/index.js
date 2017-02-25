import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { auth } from './auth';
import { listing } from './listing';
import { listings } from './listings';

export default combineReducers({
  auth,
  listing,
  listings,
  routing: routerReducer,
});

