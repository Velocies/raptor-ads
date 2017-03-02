import { push } from 'react-router-redux';

export const START_FETCHING_RATINGS = 'START_FETCHING_RATINGS';
export const FAILED_FETCH_RATINGS = 'FAILED_FETCH_RATINGS';
export const FETCH_RATINGS_SUCCESS = 'FETCH_RATINGS_SUCCESS';
export const CHANGE_RATINGS_FORM = 'CHANGE_RATINGS_FORM';
export const CHANGE_RATINGS_FORM_STARS = 'CHANGE_RATINGS_FORM_STARS';
export const SUBMIT_RATINGS_FORM = 'SUBMIT_RATINGS_FORM';

const fetchUserRatings = userId =>
  fetch(`/api/users/${userId}/ratings`);


const startFetchingRatings = () =>
  ({
    type: START_FETCHING_RATINGS,
  });

export const changeStars = newValue =>
  ({
    type: CHANGE_RATINGS_FORM_STARS,
    newValue,
  });

const postRating = payload =>
  fetch('/api/ratings', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

export const submitRatingsForm = payload =>
  (dispatch) => {
    postRating(payload)
      .then((res) => {
        if (res.status === 200) {
          res.json()
            .then((data) => {
              dispatch(push(`/user/${data.userId}/ratings`));
            });
        }
      });
  };

export const changeForm = (target, value) =>
  ({
    type: CHANGE_RATINGS_FORM,
    target,
    value,
  });

const failedRatingFetch = () =>
  ({
    type: FAILED_FETCH_RATINGS,
  });

const fetchRatingSuccess = payload =>
  ({
    type: FETCH_RATINGS_SUCCESS,
    payload,
  });

export const getUserRatings = userId =>
  (dispatch) => {
    dispatch(startFetchingRatings());
    fetchUserRatings(userId)
      .then((res) => {
        if (res.status !== 200) {
          dispatch(failedRatingFetch());
          dispatch(push('/'));
        } else {
          res.json()
            .then((ratings) => {
              dispatch(fetchRatingSuccess(ratings));
            });
        }
      });
  };

