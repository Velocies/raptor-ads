import { ADD_MAP_MARKER } from '../constants';

export const initialState = {
  center: { lat: 33, lng: 131.044922 },
  markers: [],
}

export const googleMap = (state = initialState, action) => {
  console.log('action here', action);
  switch (action.type) {
    case ADD_MAP_MARKER:
      return ({ ...state, markers: [...state.markers, action.location ] });
    default:
      return state;
  }
};