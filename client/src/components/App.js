import React from 'react';
import configureStore from '../../configureStore';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

const store = configureStore();

export const App = ({store}) =>
  <Provider store={store}>
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  </Provider>



