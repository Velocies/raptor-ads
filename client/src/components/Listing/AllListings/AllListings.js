import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider, Loader } from 'semantic-ui-react';
import { getAllListings } from '../../../actions/allListingActions';
import Listing from '../../shared/Listing';
import AllListingsFilter from './AllListingsComponents/AllListingsFilter';

class AllListings extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   listings: [],
    // };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getAllListings());
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  onClick(e) {
    console.log('clicked', e.target.innerHTML);
  }

  render() {
    const { isFetching, allListings } = this.props;
    console.log('STATE OF ARRAY', allListings);
    if (isFetching) {
      return <Loader active inline='centered' />;
    } else {
      return (
        <Container textAlign="center">
          <AllListingsFilter onClick={this.onClick} />
          <h3 onClick={() => this.onClick()}>Listings</h3>
          <Divider />
          <Card.Group itemsPerRow={4} stackable>
            {allListings && allListings.map(listing =>
              <Listing
                key={listing.id}
                id={listing.id}
                title={listing.title}
                createdAt={this.convertTime(listing.createdAt)}
                body={listing.body}
                type={listing.type}
                onClick={this.onClick}
                handleDelete={this.handleDelete}
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
  return { allListings, isFetching };
}

export default connect(mapStateToProps)(AllListings);