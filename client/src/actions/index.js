import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD } from '../constants';

const fetchPostUser = (customer) =>
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  });

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
    fetchPostUser(customer)
    .then((user) => {
      console.log('post to users returns', user);
    });
  };
