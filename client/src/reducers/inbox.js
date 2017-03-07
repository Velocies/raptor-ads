import { } from '../constants';


export const initialState = {
  allMessages: [],
  isFetching: false,
  clickedMessage: null,
};

export const inbox = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
