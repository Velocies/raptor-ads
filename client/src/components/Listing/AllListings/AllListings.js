import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider } from 'semantic-ui-react';
import { getAllListings } from '../../../actions/allListingActions';

class AllListings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    getAllListings();
    return (
      <Container textAlign="center">
        <h3>Listings</h3>
        <Divider />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { allListings } = state.listing;
  return { allListings };
}

export default connect(mapStateToProps)(AllListings);