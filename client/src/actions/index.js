import isEmpty from 'lodash/isEmpty';
import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD, ADD_SIGNUP_ERROR, CLEAR_ERRORS } from '../constants';
import { validateSignup } from '../components/helpers/validateSignup';

const fetchPostUser = customer =>
  fetch('/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  });

export const toggleSignupLink = link =>
  ({
    type: TOGGLE_SIGNUP_FORM,
    link,
  });

export const addSignupFormError = (error, message) =>
  ({
    type: ADD_SIGNUP_ERROR,
    error,
    message,
  });

export const changeSignupField = (field, value) =>
  ({
    type: CHANGE_SIGNUP_FIELD,
    field,
    value,
  });

export const clearErrors = () =>
  ({
    type: CLEAR_ERRORS,
  });

export const customerSignup = customer =>
  (dispatch, getState) => {
    validateSignup(customer, dispatch);
    if (isEmpty(getState().auth.formErrors)) {
      fetchPostUser(customer)
      .then((user) => {
        console.log('post to users returns', user);
      });
    } else {
      console.log('did nothing');
    }
  };

export const changeListingField = (field, value) =>
  ({
    type: CHANGE_LISTING_FIELD,
    field,
    value,
  });
