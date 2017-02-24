import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider } from 'semantic-ui-react';
import Listing from '../shared/Listing';
import { getUserListings, deleteListing } from '../../actions';
import { capitalize } from '../../helpers/capitalize';

class CustomerDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatch(getUserListings(userId));
  }

  handleDelete(listingId) {
    this.props.dispatch(deleteListing(this.props.userId, listingId));
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  render() {
    const { firstName, userListings, userId } = this.props;
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">{`${capitalize(firstName)}'s Dashboard`}</Header>
        <h3>Recent Listings</h3>
        <Divider />
        <Card.Group itemsPerRow={4} stackable>
          {userListings && userListings.map(listing =>
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

CustomerDashboard.propTypes = {
  firstName: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { first_name: firstName, id: userId } = state.auth.loggedInUser;
  const { userListings } = state.listing;

  return { firstName, userId, userListings };
};

export default connect(mapStateToProps)(CustomerDashboard);
