import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { HomePage } from './HomePage';
import App from './App';

export const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="HomePage" component={HomePage}/>
      </Route>
    </Router>
  </Provider>
