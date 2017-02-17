import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import configureStore from '../configureStore';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { HomePage } from './components/HomePage.jsx';


const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="HomePage" component={HomePage}/>
      </Route>
    </Router>
  </Provider>
  ,app
);

/*
import React from 'react';
import configureStore from '../../configureStore';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

const store = configureStore();

export const App = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomePage} />
    </Router>
  </Provider>


*/