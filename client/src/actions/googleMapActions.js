import { ADD_MAP_MARKER, CHANGE_CENTER, CHANGE_SEARCH_FIELD } from '../constants';

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