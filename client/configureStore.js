import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index.jsx'


const configureStore = () => {
  const logger = createLogger();
  return createStore(rootReducer, applyMiddleware(logger));
}

export default configureStore;
