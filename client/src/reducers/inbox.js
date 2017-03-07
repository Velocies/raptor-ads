import { FETCHING_MESSAGES, GET_RECEIVED_MESSAGES_SUCCESS } from '../constants';


export const initialState = {
  allMessages: [],
  isFetching: false,
  clickedMessage: null,
};

export const inbox = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MESSAGES:
      return ({ ...state, isFetching: true });
    case GET_RECEIVED_MESSAGES_SUCCESS:
      return ({ ...state, allMessages: action.payload, isFetching: false });
    default:
      return state;
  }
};
