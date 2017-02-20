import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
  const logger = createLogger();
  return createStore(rootReducer, applyMiddleware(logger, thunk));
};

export default configureStore;
