import { ADD_MAP_MARKER, CHANGE_CENTER, CHANGE_MARKER_SHOW_INFO, CHANGE_CENTER_SUCCESS, ADD_MAP_MARKERS_SUCCESS } from '../constants';
import concatAddress from '../components/helpers/concatAddress';

const geoCode = (data) => {
  const geocoder = new google.maps.Geocoder();
  return geocoder.geocode({ address: concatAddress(action.data.user)})
};

export const changeCenterSuccess = newCenter =>
  ({
    type: CHANGE_CENTER_SUCCESS,
    location: newCenter,
  });

export const addMapMarkersSuccess = markerArray =>
  ({
    type: ADD_MAP_MARKERS_SUCCESS,
    markerArray,
  });

export const changeCenter = data =>
  (dispatch) => {
    let addressString = '';
    typeof data === 'string' ? addressString = data : addressString = concatAddress(data);
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: addressString }, (results) => {
      const newCenter = {
        lat: results[0].geometry.bounds.f.f,
        lng: results[0].geometry.bounds.b.b,
        position: results[0].geometry.location,
      };
      dispatch(changeCenterSuccess(newCenter));
    });
  };

export const changeMarkerShowInfo = index =>
  ({
    type: CHANGE_MARKER_SHOW_INFO,
    index,
  });

export const addMapMarkers = data =>
  (dispatch) => {
    const markerArray = [];
    const geocoder = new google.maps.Geocoder();
    for (let i = 0; i < data.length; i++) {
      geocoder.geocode({ address: concatAddress(data[i])}, (results) => {
        const newCenter = {
          position: results[0].geometry.location,
          defaultAnimation: 2,
          key: data[i].id,
          listingInfo: data[i],
          showInfo: false,
        };
        markerArray.push(newCenter);
        if (i === data.length - 1) {
          dispatch(addMapMarkersSuccess(markerArray));
        }
      });
    }
  };

export const addMapMarker = data =>
  (dispatch) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: concatAddress(data)}, (results) => {
      const newCenter = {
        position: results[0].geometry.location,
        defaultAnimation: 2,
        key: data.id,
        listingInfo: data,
        showInfo: false,
      };
      dispatch(addMapMarkersSuccess([newCenter]));
    });
  };
