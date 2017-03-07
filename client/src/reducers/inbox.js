import { FETCHING_MESSAGES } from '../constants';


export const initialState = {
  allMessages: [],
  isFetching: false,
  clickedMessage: null,
};

export const inbox = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MESSAGES:
      return ({ ...state, isFetching: true });
    default:
      return state;
  }
};
