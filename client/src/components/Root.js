import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { LandingPage } from './LandingPage';
import App from './App';

export const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="landing" component={LandingPage}/>
      </Route>
    </Router>
  </Provider>
