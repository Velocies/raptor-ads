import isEmpty from 'lodash/isEmpty';
import { push } from 'react-router-redux';
import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD, ADD_SIGNUP_ERROR, CLEAR_ERRORS, CHANGE_LISTING_FIELD, UPLOAD_LISTING_IMAGE, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT, CHANGE_LOGIN_FIELD, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '../constants';
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

const attemptLogin = data =>
  fetch('api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
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

const signupSuccess = data =>
  ({
    type: SIGNUP_SUCCESS,
    data,
  });

const loginSuccess = data =>
  ({
    type: LOGIN_SUCCESS,
    data,
  });

const signupFailure = error =>
  ({
    type: SIGNUP_FAILURE,
    error,
  });


export const logout = () =>
  (dispatch) => {
    dispatch({ type: LOGOUT });
    dispatch(push('/'));
  };

export const changeLoginField = (name, value) =>
  ({
    type: CHANGE_LOGIN_FIELD,
    name,
    value,
  });

const loginError = () =>
  ({
    type: LOGIN_FAILURE,
  });

export const customerSignup = customer =>
  (dispatch, getState) => {
    validateSignup(customer, dispatch);
    if (isEmpty(getState().auth.formErrors)) {
      fetchPostUser(customer)
      .then((res) => {
        res.json()
          .then((data) => {
            if (data.error) {
              dispatch(signupFailure(data.error));
            }
            dispatch(signupSuccess(data));
            dispatch(push('dashboard'));
          });
      });
    } else {
      console.log('did nothing');
    }
  };

export const loginUser = data =>
  (dispatch) => {
    attemptLogin(data)
      .then((res) => {
        console.log('res', res)
        res.json()
          .then((payload) => {
            if (payload.error) {
              dispatch(loginError());
            } else {
              dispatch(loginSuccess(payload));
              dispatch(push('dashboard'));
            }
          })
      })
  }

export const changeListingField = (field, value) =>
  ({
    type: CHANGE_LISTING_FIELD,
    field,
    value,
  });

export const uploadListingImage = (value) =>
  ({
    type: UPLOAD_LISTING_IMAGE,
    value,
  });
