import isEmpty from 'lodash/isEmpty';
import { push } from 'react-router-redux';
import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD, ADD_SIGNUP_ERROR, CLEAR_ERRORS, CHANGE_LISTING_FIELD, UPLOAD_LISTING_IMAGE, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT, CHANGE_LOGIN_FIELD, LOGIN_FAILURE, LOGIN_SUCCESS, ADD_LISTING_FAILURE, ADD_LISTING_SUCCESS, GET_LISTING_SUCCESS, GET_LISTING_FAILURE, DELETE_IMAGE, TOKEN_ERROR, FETCHING_LISTINGS, FETCHING_LISTINGS_SUCCESS } from '../constants';
import { validateSignup } from '../components/helpers/validateSignup';
import { postUser, postLogin, postListing, deleteListing, getUserListings, getUserFromToken } from './api';

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

const logoutSuccess = () =>
  ({
    type: LOGOUT,
  });

export const logout = () =>
  (dispatch) => {
    dispatch(logoutSuccess());
    localStorage.removeItem('raptor_token');
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
      postUser(customer)
        .then((res) => {
          res.json()
            .then((data) => {
              if (data.error) {
                dispatch(signupFailure(data.error));
              }
              dispatch(signupSuccess(data));
              localStorage.setItem('raptor_token', data.token);
              dispatch(push('dashboard'));
            });
        });
    }
  };

export const loginUser = data =>
  (dispatch) => {
    postLogin(data)
      .then((res) => {
        res.json()
          .then((payload) => {
            if (payload.error) {
              dispatch(loginError());
            } else {
              dispatch(loginSuccess(payload));
              localStorage.setItem('raptor_token', payload.token);
              dispatch(push('dashboard'));
            }
          });
      });
  };

export const changeListingField = (field, value) =>
  ({
    type: CHANGE_LISTING_FIELD,
    field,
    value,
  });

export const uploadListingImage = value =>
  ({
    type: UPLOAD_LISTING_IMAGE,
    value,
  });

const addListingError = err =>
  ({
    type: ADD_LISTING_FAILURE,
    err,
  });

const addListingSuccess = payload =>
  ({
    type: ADD_LISTING_SUCCESS,
    payload,
  });

const getListingSuccess = payload =>
  ({
    type: GET_LISTING_SUCCESS,
    payload,
  });

const startFetchUserListings = () =>
  ({
    type: FETCHING_LISTINGS,
  });

export const fetchUserListings = id =>
  (dispatch) => {
    dispatch(startFetchUserListings());
    getUserListings(id)
      .then((res) => {
        res.json()
          .then((data) => {
            dispatch(getListingSuccess(data));
          });
      });
  };


export const uploadListing = data =>
  (dispatch) => {
    postListing(data)
      .then((res) => {
        res.json()
          .then((payload) => {
            if (payload.error) {
              dispatch(addListingError(payload.error));
            } else {
              dispatch(push('/dashboard'));
            }
          });
      });
  };

export const removeListing = (userId, listingId) =>
  (dispatch) => {
    deleteListing(listingId)
      .then(() => {
        dispatch(fetchUserListings(userId));
      });
  };

export const deleteImage = index =>
  ({
    type: DELETE_IMAGE,
    index,
  });

export const tokenError = () =>
  ({
    type: TOKEN_ERROR,
  });

export const pullUserFromToken = token =>
  (dispatch) => {
    getUserFromToken(token)
      .then((res) => {
        if (res.status !== 200) {
          localStorage.removeItem('raptor_token');
          dispatch(tokenError());
          dispatch(push('/login'));
        } else {
          res.json()
            .then((user) => {
              dispatch(loginSuccess({user}));
              dispatch(fetchUserListings(user.id));
            });
        }
      });
  };

