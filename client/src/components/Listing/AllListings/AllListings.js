import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider, Loader, Grid } from 'semantic-ui-react';
import { getAllListings } from '../../../actions/allListingActions';
import Listing from '../../shared/Listing';
import AllListingsFilter from './AllListingsComponents/AllListingsFilter';
import GoogleMapContainer from './AllListingsComponents/GoogleMap/GoogleMapContainer';
// import InitialMap from './GoogleMap/GoogleMap';


class AllListings extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getAllListings());
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  cutBody(body) {
    if (body.length > 20) {
      body = body.slice(0, 20) + '...';
    }
    return body;
  }

  render() {
    const { isFetching, allListings, cutBody } = this.props;
    if (isFetching) {
      return <Loader active inline='centered' />;
    } else {
      return (
        <Container textAlign="center">
          <Grid width={16}>
            <Grid.Column width={8}>
              <GoogleMapContainer />
            </Grid.Column>
            <Grid.Column width={8}>
              <AllListingsFilter onClick={this.onClick} />
            </Grid.Column>
          </Grid>
          <h3>Listings</h3>
          <Divider />
          <Card.Group itemsPerRow={4} stackable>
            {allListings && allListings.map(listing =>
              <Listing
                key={listing.id}
                listingId={listing.id}
                title={listing.title}
                createdAt={this.convertTime(listing.createdAt)}
                body={listing.body}
                type={listing.type}
                onClick={this.onClick}
                handleDelete={this.handleDelete}
                cutBody={this.cutBody}
              />
            )}
          </Card.Group>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const { allListings, isFetching } = state.listings;
  const { id } = state.auth.loggedInUser;
  return { allListings, isFetching, id };
};

export default connect(mapStateToProps)(AllListings);