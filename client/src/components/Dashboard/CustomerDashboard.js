import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider, Loader } from 'semantic-ui-react';
import Listing from '../shared/Listing';
import { removeListing } from '../../actions';
import { capitalize } from '../helpers/capitalize';

class CustomerDashboard extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete(listingId) {
    this.props.dispatch(removeListing(this.props.id, listingId));
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  render() {
    const { first_name, userListings, id, isFetching } = this.props;
    if (isFetching) { return <Loader active inline="centered" />; }
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">
          {`${capitalize(first_name)}'s Dashboard`}
        </Header>
        <h3>Recent Listings</h3>
        <Divider />
        <Card.Group itemsPerRow={4} stackable>
          {userListings && userListings.map(listing =>
            <Listing
              key={listing.id}
              listingId={listing.id}
              title={listing.title}
              createdAt={this.convertTime(listing.createdAt)}
              body={listing.body}
              type={listing.type}
              userId={id}
              handleDelete={this.handleDelete}
            />,
          )}
        </Card.Group>
      </Container>
    );
  }
}

CustomerDashboard.propTypes = {
  first_name: React.PropTypes.string.isRequired,
  userListings:
  React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  id: React.PropTypes.number.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { first_name, id } = state.auth.loggedInUser;
  const { userListings, isFetching } = state.listing;

  return { first_name, id, userListings, isFetching };
};

const mapDispatchToProps = dispatch =>
  ({
    handleDelete: (userId, listingId) => {
      dispatch(removeListing(userId, listingId));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDashboard);
