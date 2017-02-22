import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { LandingPage } from './LandingPage';
import Signup from './Signup/Signup';
import Login from './Login';
import { CustomerDashboard } from './CustomerDashboard';
import App from './App';
import configureStore from '../configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="landing" component={LandingPage} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
        <Route path="dashboard" component={CustomerDashboard} />
      </Route>
    </Router>
  </Provider>;

export default Root;
