import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';


const configureStore = () => {
  const router = routerMiddleware(browserHistory);
  const middlewares = [thunk, router];

  if (!process.env.NODE_ENV) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default configureStore;
