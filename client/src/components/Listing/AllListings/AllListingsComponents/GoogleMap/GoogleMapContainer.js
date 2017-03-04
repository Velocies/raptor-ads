import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import GoogleMapRender from './GoogleMap';
import { addMapMarker, changeCenter, changeMarkerShowInfo } from '../../../../../actions/googleMapActions';
import { tokenError } from '../../../../../actions/index.js';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  SearchBox,
} from 'react-google-maps';


class GoogleMapContainer extends Component {
  constructor(props) {
    super(props);
    this.MapLoad = this.handleMapLoad.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
    this.handleMarkerLeftClick = this.handleMarkerLeftClick.bind(this);
    this.handleMarkerMouseEnter = this.handleMarkerMouseEnter.bind(this);
  }


  handleMapLoad(map) {
    // console.log('map', map);
    // this._mapComponent = map;
    // if (map) {
    //   console.log(map.getZoom());
    // }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */


  handleMapClick(event) {
    console.log('event', event);
    const nextMarkers = {
      position: event.latLng,
      defaultAnimation: 2,
      key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      showInfo: false,
    };
    console.log('nextMarkers', nextMarkers)
    this.props.dispatch(addMapMarker(nextMarkers));
    console.log('markers', this.props.markers)
    console.log('google map', google.maps.geometry.spherical.computeDistanceBetween);
    if (this.props.markers.length > 1) {
      console.log('distance is', google.maps.geometry.spherical.computeDistanceBetween(this.props.markers[0].position, event.latLng));
    }
    // if (nextMarkers.length === 3) {
    //   this.props.toast(
    //     `Right click on the marker to remove it`,
    //     `Also check the code!`
    //   );
    // }
  }

  handleMarkerLeftClick(targetMarker, index) {
    console.log('targetMarker', targetMarker, index);
    this.props.dispatch(changeMarkerShowInfo(index));
  }

  handleMarkerMouseEnter(targetMarker) {
    console.log('targetMarker mouse enter', targetMarker);
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    this.geocoder = new google.maps.Geocoder();
    this.geocoder.geocode({ 'address': '1012 docday court, Folsom, Ca, United States' }, function handleResults(results, status) {

      const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
      const newThing = {
        position: results[0].geometry.location,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        showInfo: false,
      };
      nextMarkers.push(newThing);
      this.setState({
        markers: nextMarkers,
      });
      // console.log('markers', this.state.markers);
      console.log('results', results, status);
    }.bind(this));
  }

  render() {
    const { center, markers } = this.props;
    //if pathname is exactly listings, pull from positions in listings
    //else pull from full listings, current listing
    return (
      <div style={{height: '100%'}}>
        <GoogleMapRender
          containerElement={
            <div style={{ height: '300px' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          defaultCenter={center}
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={markers}
          onMarkerRightClick={this.handleMarkerRightClick}
          onMarkerLeftClick={this.handleMarkerLeftClick}
          handleMarkerMouseEnter={this.handleMarkerMouseEnter}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { center } = state.googleMap;
  return { center };
};

export default connect(mapStateToProps)(GoogleMapContainer);