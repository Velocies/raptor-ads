import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { app } from './app';
import { auth } from './auth';
import { listing } from './listing';

console.log('listing here', listing);
export default combineReducers({
  app,
  auth,
  listing,
  routing: routerReducer,
})

