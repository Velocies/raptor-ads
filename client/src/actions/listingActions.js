import { CHANGE_LISTING_FIELD, UPLOAD_LISTING_IMAGE, ADD_LISTING_FAILURE, ADD_LISTING_SUCCESS, GET_LISTINGS_SUCCESS, DELETE_IMAGE, FETCHING_LISTINGS, POST_LISTING_SUCCESS, ADD_LISTING_FORM_ERROR } from '../constants';
import { postListing, deleteListing, getUserListings } from './api';
import validateListing from '../components/helpers/validateListing';

export const changeListingField = (field, value) =>
  ({
    type: CHANGE_LISTING_FIELD,
    field,
    value,
  });

export const uploadListingImage = value => {
  if (urlRegex.test(value.img_path)) {
    return ({
      type: UPLOAD_LISTING_IMAGE,
      value,
    });
  } else {
    return ({
      type: ADD_LISTING_FORM_ERROR,
      error: 'image',
      message: 'Image URL is invalid',
    });
  }
}

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
                dispatch(push('/dashboard'));
              }
            });
        });
    }
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

export const addListingFormError = (error, message) =>
  ({
    type: ADD_LISTING_FORM_ERROR,
    error,
    message,
  });


