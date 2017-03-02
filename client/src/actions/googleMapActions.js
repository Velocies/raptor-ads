import { ADD_MAP_MARKER, CHANGE_CENTER, CHANGE_MARKER_SHOW_INFO, CHANGE_CENTER_SUCCESS, ADD_MAP_MARKERS_SUCCESS } from '../constants';
import concatAddress from '../components/helpers/concatAddress';

const geoCode = (data) => {
  const geocoder = new google.maps.Geocoder();
  return geocoder.geocode({ address: concatAddress(action.data.user)})
};


export const addMapMarker = location =>
  ({
    type: ADD_MAP_MARKER,
    location,
  });

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
    console.log('DATA RECEIVED IN G MAPS', data);
    const geocoder = new google.maps.Geocoder();
    console.log('CONCAT ADDRESS', concatAddress(data));
    geocoder.geocode({ 'address': concatAddress(data)}, (results) => {
      console.log('results123412341', results);
      const newCenter = {
        lat: results[0].geometry.bounds.f.f,
        lng: results[0].geometry.bounds.b.b,
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
      geocoder.geocode({ 'address': concatAddress(data[i])}, (results) => {
        const newCenter = {
          position: results[0].geometry.location,
          defaultAnimation: 2,
          key: data[i].id,
        };
        markerArray.push(newCenter);
      });
    }
    dispatch(addMapMarkersSuccess(markerArray));
    console.log('marker array123413', markerArray);
  };
