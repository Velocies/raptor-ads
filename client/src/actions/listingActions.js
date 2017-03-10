import { push } from 'react-router-redux';
import isEmpty from 'lodash/isEmpty';
import { CHANGE_LISTING_FIELD, UPLOAD_LISTING_IMAGE, ADD_LISTING_FAILURE, ADD_LISTING_SUCCESS, GET_LISTINGS_SUCCESS, DELETE_IMAGE, FETCHING_LISTINGS, POST_LISTING_SUCCESS, ADD_LISTING_FORM_ERROR, CLEAR_ERRORS } from '../constants';
import { postListing, deleteListing, getUserListings } from './api';
import validateListing from '../components/helpers/validateListing';
import { getAllListings } from './allListingActions';

const urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

export const changeListingField = (field, value) =>
  ({
    type: CHANGE_LISTING_FIELD,
    field,
    value,
  });

export const uploadListingImage = (value) => {
  if (value.img_path.match(urlRegex)) {
    return ({
      type: UPLOAD_LISTING_IMAGE,
      value,
    });
  }
  return ({
    type: ADD_LISTING_FORM_ERROR,
    error: 'image',
    message: 'Image URL is invalid',
  });
};

export const clearErrors = () =>
  ({
    type: CLEAR_ERRORS,
  });

const addListingError = err =>
  ({
    type: ADD_LISTING_FAILURE,
    err,
  });


const getListingSuccess = payload =>
  ({
    type: GET_LISTINGS_SUCCESS,
    payload,
  });

const startFetchUserListings = () =>
  ({
    type: FETCHING_LISTINGS,
  });

const postListingSuccess = () =>
  ({
    type: POST_LISTING_SUCCESS,
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
  (dispatch, getState) => {
    validateListing(data.data, dispatch);
    if (isEmpty(getState().listing.formErrors)) {
      postListing(data)
        .then((res) => {
          res.json()
            .then((payload) => {
              if (payload.error) {
                dispatch(addListingError(payload.error));
              } else {
                dispatch(postListingSuccess());
                dispatch(fetchUserListings(data.id));
                dispatch(push(`/user/${data.id}/dashboard`));
                dispatch(getAllListings());
              }
            });
        });
    }
  };

export const removeListing = (listingId, userId) =>
  (dispatch) => {
    deleteListing(listingId)
      .then(() => {
        dispatch(fetchUserListings(userId));
        dispatch(push(`/user/${userId}/dashboard`));
      });
  };

export const deleteImage = index =>
  ({
    type: DELETE_IMAGE,
    index,
  });

export const addListingFormError = (error, message) =>
  ({
    type: ADD_LISTING_FORM_ERROR,
    error,
    message,
  });
