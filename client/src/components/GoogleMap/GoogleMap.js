import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const GoogleMapRender = withGoogleMap(props =>
  <GoogleMap
    center={props.defaultCenter}
    zoom={12}
  >
    {props.markers.map((marker, index) => {
      if (marker.position) {
        return (
          <Marker
            {...marker.position}
            onClick={() => props.handleInfoWindow(marker, index)}
          />
        );
      }
    })}
  </GoogleMap>,
);

export default GoogleMapRender;
