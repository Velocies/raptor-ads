import { ADD_MAP_MARKER, CHANGE_CENTER, CHANGE_MARKER_SHOW_INFO } from '../constants';

export const addMapMarker = location =>
  ({
    type: ADD_MAP_MARKER,
    location,
  });

export const changeCenter = location =>
  ({
    type: CHANGE_CENTER,
    location,
  });

export const changeMarkerShowInfo = index =>
  ({
    type: CHANGE_MARKER_SHOW_INFO,
    index,
  });