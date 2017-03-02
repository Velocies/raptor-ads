import { GET_CURRENT_LISTING_SUCCESS, FETCHING_LISTING } from '../constants';
import { changeCenter } from './googleMapActions';
import { fetchCurrentListing } from './api';

const startFetchListing = () =>
  ({
    type: FETCHING_LISTING,
  });

const getCurrentListingsSuccess = payload =>
  ({
    type: GET_CURRENT_LISTING_SUCCESS,
    payload,
  });

export const getCurrentListing = listingId =>
  (dispatch) => {
    dispatch(startFetchListing());
    fetchCurrentListing(listingId)
    .then((res) => {
      res.json()
      .then((data) => {
        dispatch(changeCenter(data));
        dispatch(getCurrentListingsSuccess(data));
      });
    });
  };
