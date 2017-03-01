import { ADD_MAP_MARKER, CHANGE_CENTER, CHANGE_MARKER_SHOW_INFO, LOGIN_SUCCESS, GET_CURRENT_LISTING_SUCCESS } from '../constants';
import concatAddress from '../components/helpers/concatAddress';

export const initialState = {
  center: { lat: 38.6536082, lng:
-121.14818130000003 },
  markers: [],
};

const geocoder = new google.maps.Geocoder();

export const googleMap = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CENTER_SUCCESS':
      console.log('ACTION LOCATION', action.location);
      return ({ ...state, center: action.location });
    // case GET_CURRENT_LISTING_SUCCESS:
    //   console.log('SHOULD CHANGE HERE', concatAddress(action.payload));
    //   geocoder.geocode({ 'address': concatAddress(action.payload)}, (results) => {
    //     console.log('HELLLLO')
    //     const newCenter = {
    //       lat: results[0].geometry.bounds.f.f,
    //       lng: results[0].geometry.bounds.b.b,
    //     };
    //     console.log('newCenter', newCenter)
    //     return ({ ...state, center: newCenter });
    //   });
    //   return ({ ...state });
    // case CHANGE_MARKER_SHOW_INFO:
    //   const markersClone = [...state.markers];
    //   markersClone[action.index].showInfo = !markersClone[action.index].showInfo;
    //   return ({ ...state, markers: markersClone });
    case CHANGE_CENTER:
      return ({ ...state, center: action.location });
    case ADD_MAP_MARKER:
      return ({ ...state, markers: [...state.markers, action.location] });
    default:
      return state;
  }
};