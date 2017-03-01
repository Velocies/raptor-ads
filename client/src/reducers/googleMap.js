import { ADD_MAP_MARKER, CHANGE_CENTER } from '../constants';

export const initialState = {
  center: { lat: 38.6536082, lng:
-121.14818130000003 },
  markers: [],
};

export const googleMap = (state = initialState, action) => {
  console.log('action here', action);
  switch (action.type) {
    case CHANGE_CENTER:
      return ({ ...state, center: action.location });
    case ADD_MAP_MARKER:
      return ({ ...state, markers: [...state.markers, action.location ] });
    default:
      return state;
  }
};