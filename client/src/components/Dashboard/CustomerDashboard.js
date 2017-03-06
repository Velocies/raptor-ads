import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Divider, Loader } from 'semantic-ui-react';
import Listing from '../shared/Listing';
import capitalize from '../helpers/capitalize';
import convertTime from '../helpers/convertTime';

const CustomerDashboard =
  ({ firstName, userListings, id, isFetching, pathname }) => {
    if (isFetching) { return <Loader active inline="centered" />; }
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">
          {`${capitalize(firstName)}'s Dashboard`}
        </Header>
        <Header as="h3" color="green">Recent Listings</Header>
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
              pathname={pathname}
            />,
          )}
        </Card.Group>
      </Container>
    );
  };

CustomerDashboard.propTypes = {
  firstName: React.PropTypes.string.isRequired,
  userListings:
  React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  id: React.PropTypes.number.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  pathname: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { firstName, id } = state.auth.loggedInUser;
  const { userListings, isFetching } = state.listing;
  const { pathname } = state.routing.locationBeforeTransitions;

  return { firstName, id, userListings, isFetching, pathname };
};

export default connect(mapStateToProps)(CustomerDashboard);
