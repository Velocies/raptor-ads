import { ADD_MAP_MARKER, CHANGE_CENTER, CHANGE_MARKER_SHOW_INFO, LOGIN_SUCCESS, GET_CURRENT_LISTING_SUCCESS, CHANGE_CENTER_SUCCESS, ADD_MAP_MARKERS_SUCCESS } from '../constants';

export const initialState = {
  center: { lat: 38.6536082, lng: -121.14818130000003 },
};


export const googleMap = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CENTER_SUCCESS:
      return ({ ...state, center: action.location });
    case ADD_MAP_MARKERS_SUCCESS:
      return ({ ...state, filteredMarkers: action.markerArray });
    case CHANGE_CENTER:
      return ({ ...state, center: action.location });
    case ADD_MAP_MARKER:
      return ({ ...state, markers: [...state.markers, action.location] });
    default:
      return state;
  }
};
