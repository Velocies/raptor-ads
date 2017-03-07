import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapRender from './GoogleMap';
import { changeMarkerShowInfo } from '../../../../../actions/googleMapActions';
import { tokenError } from '../../../../../actions/index';


class GoogleMapContainer extends Component {
  constructor(props) {
    super(props);
    this.handleInfoWindow = this.handleInfoWindow.bind(this);
  }


  handleInfoWindow(targetMarker, index) {
    this.props.dispatch(changeMarkerShowInfo(index));
  }

  render() {
    const { center, markers } = this.props;
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
          markers={markers}
          handleInfoWindow={this.handleInfoWindow}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { center } = state.googleMap;
  return { center };
};

export default connect(mapStateToProps)(GoogleMapContainer);
