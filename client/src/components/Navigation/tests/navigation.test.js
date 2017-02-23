import React from 'react';
import NavbarContainer from '../NavbarContainer';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({routing: {locationBeforeTransitions: {pathname: '/signup'}}});

test('Navigation test', () => {
  //const component = renderer.create(<NavbarContainer store={store}></NavbarContainer>);
  //let tree = component.toJSON();
  //expect(tree).toMatchSnapshot();
})
