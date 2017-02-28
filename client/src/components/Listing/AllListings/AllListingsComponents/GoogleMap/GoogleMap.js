/* global google */
import _ from "lodash";
import React, { Component } from 'react';
import Helmet from "react-helmet";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GoogleMapRender = withGoogleMap(props => {
  console.log('props', props.defaultCenter)
  return (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={props.defaultCenter}
    onClick={props.onMapClick}
    center={{lat: -30, lng: 100}}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
  )
});

export default GoogleMapRender;

