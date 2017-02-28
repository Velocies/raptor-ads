import { ADD_MAP_MARKER } from '../constants';

export const addMapMarker = location =>
  ({
    type: ADD_MAP_MARKER,
    location,
  });
