import React, { Component } from 'react';
import { Container, Header, Icon, Card, Segment, Button, Divider } from 'semantic-ui-react';
import Listing from '../shared/Listing';

class CustomerDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">Customer Dashboard</Header>
        <div className="icon-bar">
          <Icon name="home" size="huge" />
          <Icon name="laptop" size="huge" />
        </div>
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

export default CustomerDashboard;
