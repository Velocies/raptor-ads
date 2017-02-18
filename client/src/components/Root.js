import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { LandingPage } from './LandingPage';
import { Signup } from './Signup';
import { Login } from './Login';
import { CustomerDashboard } from './CustomerDashboard';
import App from './App';
import configureStore from '../configureStore.js';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

export const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="landing" component={LandingPage}/>
        <Route path="signup" component={Signup}/>
        <Route path="login" component={Login}/>
        <Route path="customer">
          <Route path="dashboard" component={CustomerDashboard}/>
        </Route>
      </Route>
    </Router>
  </Provider>
