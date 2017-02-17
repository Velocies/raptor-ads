import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  app: rootReducer,
  routing: routerReducer
})

const configureStore = () => {
  const logger = createLogger();
  return createStore(reducers, applyMiddleware(logger));
}

export default configureStore;
