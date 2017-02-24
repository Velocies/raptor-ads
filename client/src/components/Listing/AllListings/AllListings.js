import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider } from 'semantic-ui-react';

class AllListings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props);
    return (
      <h2>AllListings</h2>
    );
  }
}

const mapStateToProps = (state) => {
  const { allListings } = state.listing;
  return { allListings };
}

export default connect(mapStateToProps)(AllListings);