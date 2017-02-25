import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Divider, Loader } from 'semantic-ui-react';
import Listing from '../shared/Listing';
import { removeListing } from '../../actions';
import { capitalize } from '../helpers/capitalize';
import convertTime from '../helpers/convertTime';

const CustomerDashboard =
  ({ first_name, userListings, id, isFetching, handleDelete, pathname }) => {
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
              createdAt={convertTime(listing.createdAt)}
              body={listing.body}
              type={listing.type}
              userId={id}
              handleDelete={handleDelete}
              pathname={pathname}
            />,
          )}
        </Card.Group>
      </Container>
    );
  };

CustomerDashboard.propTypes = {
  first_name: React.PropTypes.string.isRequired,
  userListings:
  React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  id: React.PropTypes.number.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
  pathname: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { first_name, id } = state.auth.loggedInUser;
  const { userListings, isFetching } = state.listing;
  const { pathname } = state.routing.locationBeforeTransitions;

  return { first_name, id, userListings, isFetching, pathname };
};

const mapDispatchToProps = dispatch =>
  ({
    handleDelete: (userId, listingId) => {
      dispatch(removeListing(userId, listingId));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDashboard);
