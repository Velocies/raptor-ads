import { GET_RECEIVED_MESSAGES_SUCCESS, FETCHING_MESSAGES } from '../constants';
import { getReceivedMessages } from './api';


const startFetchMessages = () =>
  ({
    type: FETCHING_MESSAGES,
  });

export const getReceivedMessagesSuccess = payload =>
  ({
    type: GET_RECEIVED_MESSAGES_SUCCESS,
    payload,
  });

export const getAllReceivedMessages = userId =>
  (dispatch) => {
    dispatch(startFetchMessages());
    getReceivedMessages(userId)
    .then((res) => {
      res.json()
      .then((data) => {
        console.log(data);
        dispatch(getReceivedMessagesSuccess(data));
      });
    });
  };
