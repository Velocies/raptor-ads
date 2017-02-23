import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Button, Divider } from 'semantic-ui-react';
import Listing from '../shared/Listing';

class CustomerDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName } = this.props;
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">{`${capitailize(firstName)}'s Dashboard`}</Header>
        <h3>Recent Listings</h3>
        <Divider />
        <Card.Group itemsPerRow={4} stackable>
          <Listing
            id={1}
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            id={2}
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            id={3}
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            id={4}
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            id={5}
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            id={6}
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            id={7}
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            id={8}
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
        </Card.Group>
      </Container>
    );
  }
}

CustomerDashboard.propTypes = {
  firstName: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { first_name: firstName } = state.auth.loggedInUser;

  return { firstName };
};

export default connect(mapStateToProps)(CustomerDashboard);
