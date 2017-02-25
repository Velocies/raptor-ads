import { withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";
import React from 'react';

const InitialMap = withGoogleMap((props) => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={{ lat: 40, lng: -73 }}
    >
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      />
    </GoogleMap>
  );
});

export default InitialMap;


import AllListingsFilter from './AllListingsComponents/AllListingsFilter';
import InitialMap from './GoogleMap/GoogleMap';