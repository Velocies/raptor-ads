/* global google */
import { Link } from 'react-router';
import React from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import GoogleMapInfoWindow from './GoogleMapInfoWindow';

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GoogleMapRender = withGoogleMap(props =>
  <GoogleMap
    ref={props.onMapLoad}
    center={props.defaultCenter}
    zoom={12}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker.position}
        onClick={() => props.handleInfoWindow(marker, index)}
      />
    ))}
  </GoogleMap>
);

export default GoogleMapRender;


      //       {marker.position && marker.position.showInfo && (
      //   <InfoWindow onCloseClick={() => props.handleInfoWindow(marker, index)}>
      //     <GoogleMapInfoWindow
      //       title={marker.title}
      //       distance={marker.distanceFromCenter}
      //     />
      //   </InfoWindow>
      // )}