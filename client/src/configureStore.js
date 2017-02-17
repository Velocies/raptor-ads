import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const configureStore = () => {
  const logger = createLogger();
  return createStore(rootReducer, applyMiddleware(logger));
}

export default configureStore;