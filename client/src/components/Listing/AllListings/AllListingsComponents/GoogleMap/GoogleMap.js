/* global google */
import _ from "lodash";
import React, { Component } from 'react';
import Helmet from "react-helmet";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
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
    onClick={props.onMapClick}
    center={props.defaultCenter}
    zoom={15}
  >
    {props.markers.map((marker, index)=> (
      <Marker
        {...marker}
        onClick={() => props.onMarkerLeftClick(marker, index)}
      >
      {marker.showInfo && (
        <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
          <div>{marker.infoContent}</div>
        </InfoWindow>
      )}
      </Marker>
    ))}
  </GoogleMap>
  )
});

export default GoogleMapRender;
        // onClick={() => props.onMarkerLeftClick(marker)}
