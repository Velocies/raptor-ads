/* eslint-disable no-unused-vars */

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import CustomerSignup from '../CustomerSignup';
import configureStore from '../../../configureStore';

const store = configureStore();

describe('CustomerSignup validations', () => {
  const customerSignup = mount(
    <Provider store={store}>
      <CustomerSignup dispatch={store.dispatch} />
    </Provider>,
  );

  it('should change all classes when submitted empty', () => {
    //expect(customerSignup.find('input')).toHaveLength(9);
    //customerSignup.find('button').toBeTruthy;
    //expect(customerSignup.find('#firstName').hasClass('fieldInvalid')).toBeTruthy;
  });
});
