import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD } from '../constants';

export const toggleSignupLink = link =>
  ({
    type: TOGGLE_SIGNUP_FORM,
    link,
  });

export const changeSignupField = (field, value) =>
  ({
    type: CHANGE_SIGNUP_FIELD,
    field,
    value,
  });

export const customerSignup = customer =>
  (dispatch) => {
    console.log('customer is', customer);
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
    .then((user) => {
      console.log('post to users returns', user);
    });
  };
