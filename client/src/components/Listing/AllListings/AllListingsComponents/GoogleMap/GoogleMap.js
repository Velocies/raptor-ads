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
        onClick={() => props.handleInfoWindow(marker, index)}
      >
      {marker.position.showInfo && (
        <InfoWindow onCloseClick={() => props.handleInfoWindow(marker, index)}>
          <GoogleMapInfoWindow
            title={marker.title}
            distance={marker.distanceFromCenter}
          />
        </InfoWindow>
      )}
      </Marker>
    ))}
  </GoogleMap>
  );
});

export default GoogleMapRender;
        // onClick={() => props.onMarkerLeftClick(marker)}

      // {marker.showInfo && (
      //   <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
      //     <div>{marker.infoContent}</div>
      //   </InfoWindow>
      // )}


      // {marker.position.showInfo && (
      //   <InfoWindow>
      //     <Link to={`/listings/${marker.id}`} ><div>HELLO</div></Link>
      //   </InfoWindow>
      // )}