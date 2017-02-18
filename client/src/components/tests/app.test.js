import React from 'react';
import App from '../App'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({routing: {locationBeforeTransitions: {pathname: '/signup'}}});

test('App test', () => {
  const component = renderer.create(<Provider store={store}><App /></Provider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
