import React from 'react';
import convertDistance from '../../../../helpers/convertDistance';

const GoogleMapInfoWindow = ({ title, distance }) => {
  console.log('DISTANCE IS', distance)
  return (
    <div>
      <h5>{title}</h5>
      <div>{`${convertDistance(distance)} miles away`}</div>
    </div>

  );
}


export default GoogleMapInfoWindow;