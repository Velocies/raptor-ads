import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Icon, Header, Divider } from 'semantic-ui-react';

class FullListing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, body, images, createdAt } = this.props;
    console.log('FullListing props: ', this.props);
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">-- {title || 'Current Listing'} --</Header>
        <Divider />

      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { listingForm } = state.listing;
  const { id } = state.auth.loggedInUser;
  return {
    id,
    listingForm,
  };
};
export default connect(mapStateToProps)(FullListing);
