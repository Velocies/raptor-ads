import { GET_ALL_LISTINGS, GET_ALL_LISTINGS_SUCCESS } from '../constants';
import { fetchAllListings } from './api';

const getAllListingsSuccess = payload =>
  ({

  })

export const getAllListings = () => {
  (dispatch) => {
    fetchAllListings()
    .then((res) => {
      res.json()
      .then((data) => {
        dispatch(getAllListingsSuccess(data));
      });
    });

  };
};