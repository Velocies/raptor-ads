import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';

const middleware = routerMiddleware(browserHistory);

const configureStore = () => {
  const logger = createLogger();
  return createStore(rootReducer, applyMiddleware(logger, thunk, middleware));
};

export default configureStore;
