import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddListing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2>Add Listing</h2>
    );
  }

}

const mapStateToProps = (state) => {
  const { listingForm } = state.listing;
  return {
    listingForm,
  };
};

export default connect(mapStateToProps)(AddListing);
