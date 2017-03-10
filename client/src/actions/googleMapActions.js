import { ADD_MAP_MARKER, CHANGE_CENTER, CHANGE_MARKER_SHOW_INFO, CHANGE_CENTER_SUCCESS, ADD_MAP_MARKERS_SUCCESS } from '../constants';
import concatAddress from '../components/helpers/concatAddress';
import { getAllListingsSuccess } from './allListingActions';
import { getCurrentListingSuccess } from './fullListingActions';
import async from 'async';

const geoCode = (data) => {
  const geocoder = new google.maps.Geocoder();
  return geocoder.geocode({ address: concatAddress(action.data.user) });
};

const image = '/client/src/assets/mini-raptor.png';

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
      if (results[0]) {
        const newCenter = {
          lat: results[0].geometry.bounds.f.f,
          lng: results[0].geometry.bounds.b.b,
          position: results[0].geometry.location,
        };
        dispatch(changeCenterSuccess(newCenter));

      }
    });
  };

export const changeMarkerShowInfo = index =>
  ({
    type: CHANGE_MARKER_SHOW_INFO,
    index,
  });

export const sortMarkersByDistance = data =>
  (dispatch, getState) => {
    const markers = [...data];
    if (getState().googleMap.center.position) {
      const centerPosition = getState().googleMap.center.position;
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].position) {
          markers[i].distanceFromCenter = google.maps.geometry.spherical.computeDistanceBetween(centerPosition, markers[i].position.position);
        }
      }
      // markers.sort((a, b) => a.distanceFromCenter - b.distanceFromCenter);
      dispatch(getAllListingsSuccess(markers));
    }
  };

export const addMapMarkers = data =>
  (dispatch) => {
    const newData = [...data];
    const geocoder = new google.maps.Geocoder();
    async.map(newData, (listing, callback) => {
      geocoder.geocode({ address: concatAddress(listing) }, (results, err) => {
        if (results && results[0]) {
          const newCenter = {
            position: results[0].geometry.location,
            defaultAnimation: 2,
            key: listing.id,
            showInfo: false,
            icon: image,
          };
          listing.position = newCenter;
        callback(null, listing);
        }
      });
    }, (err, positionResults) => {
      dispatch(getAllListingsSuccess(positionResults));
      dispatch(sortMarkersByDistance(positionResults));
    });
  };

export const addMapMarker = data =>
  (dispatch) => {
    const newData = {...data};
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: concatAddress(data)}, (results) => {
      const newCenter = {
        position: results[0].geometry.location,
        defaultAnimation: 2,
        key: data.id,
        showInfo: false,
        icon: image,
      };
      newData.position = newCenter;
      dispatch(getCurrentListingSuccess(newData));
      dispatch(addMapMarkersSuccess([newCenter]));
    });
  };

// async.map(newData, (listing, callback) => {
//       geocoder.geocode({ address: concatAddress(listing) }, (results, err) => {
//         if (results) {
//           console.log('HELLO FROM')
//           const newCenter = {
//             position: results[0].geometry.location,
//             defaultAnimation: 2,
//             key: listing.id,
//             showInfo: false,
//             icon: image,
//           };
//           listing.position = newCenter;
//         } else {
//           return false;
//         }
//       });
//     }, (err, positionResults) => {
//       console.log('HELLO FROM THERE')
//       dispatch(getAllListingsSuccess(positionResults));
//       dispatch(sortMarkersByDistance(positionResults));
//     });
