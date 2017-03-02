import { push } from 'react-router-redux';

export const START_FETCHING_RATINGS = 'START_FETCHING_RATINGS';
export const FAILED_FETCH_RATINGS = 'FAILED_FETCH_RATINGS';
export const FETCH_RATINGS_SUCCESS = 'FETCH_RATINGS_SUCCESS';

const fetchUserRatings = userId =>
  fetch(`/api/users/${userId}/ratings`);


const startFetchingRatings = () =>
  ({
    type: START_FETCHING_RATINGS,
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
          console.log('body', res.body);
          dispatch(fetchRatingSuccess(res.body));
        }
      });
  };

