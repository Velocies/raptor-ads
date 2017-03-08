import { RESET_PAGINATION, CHANGE_ACTIVEITEM } from '../actions';

export const initialState = {
  activeItem: 1,
};

export const pagination = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVEITEM:
      return { ...state, activeItem: action.itemNumber }
    default:
      return state;
  }
};
