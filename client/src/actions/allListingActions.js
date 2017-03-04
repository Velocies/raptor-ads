import { GET_ALL_LISTINGS, GET_ALL_LISTINGS_SUCCESS, FETCHING_LISTINGS, CHANGE_SEARCH_FIELD, CHANGE_FILTER_CATEGORY, CHANGE_DISTANCE_RADIUS, CHANGE_SORT_FILTER } from '../constants';
import { changeCenter, addMapMarkers } from './googleMapActions';
import { fetchAllListings } from './api';

const startFetchListings = () =>
  ({
    type: FETCHING_LISTINGS,
  });

export const getAllListingsSuccess = payload =>
  ({
    type: GET_ALL_LISTINGS_SUCCESS,
    payload,
  });

export const getAllListings = () =>
  (dispatch, getState) => {
    dispatch(startFetchListings());
    fetchAllListings()
    .then((res) => {
      res.json()
      .then((data) => {
        if (getState().auth.loggedInUser.role === 'professional') {
          dispatch(changeCenter(getState().auth.loggedInUser.business));
        } else {
          dispatch(changeCenter(getState().auth.loggedInUser));
        }
        dispatch(addMapMarkers(data));
      });
    });
  };

export const changeSearchField = value =>
  ({
    type: CHANGE_SEARCH_FIELD,
    value,
  });

export const changeFilterCategory = category =>
  ({
    type: CHANGE_FILTER_CATEGORY,
    category,
  });

export const changeDistanceRadius = distance =>
  ({
    type: CHANGE_DISTANCE_RADIUS,
    distance,
  });

export const changeSortFilter = sort =>
  ({
    type: CHANGE_SORT_FILTER,
    sort,
  });
