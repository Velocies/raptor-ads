/* global google */
import _ from "lodash";
import { Link } from 'react-router';
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
  return (
  <GoogleMap
    ref={props.onMapLoad}
    onClick={props.onMapClick}
    center={props.defaultCenter}
    zoom={12}
  >
    {props.markers.map((marker, index)=> (
      <Marker
        {...marker.position}
        onClick={() => props.onMarkerLeftClick(marker, index)}
      >
      {marker.showInfo && (
        <InfoWindow>
          <Link to={`/listings/${marker.key}`} ><div>{marker.listingInfo.title}</div></Link>
        </InfoWindow>
      )}
      </Marker>
    ))}
  </GoogleMap>
  )
});

export default GoogleMapRender;
        // onClick={() => props.onMarkerLeftClick(marker)}

      // {marker.showInfo && (
      //   <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
      //     <div>{marker.infoContent}</div>
      //   </InfoWindow>
      // )}