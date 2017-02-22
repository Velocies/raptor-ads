import React, { Component } from 'react';
import { Container, Header, Icon, Card } from 'semantic-ui-react';
import ListingCard from '../shared/ListingCard';

class CustomerDashboard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">Customer Dashboard</Header>
        <Icon name="home" size="huge" />
        <Icon name="laptop" size="huge" />
        <Card.Group itemsPerRow={4} stackable>
          <ListingCard
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <ListingCard
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <ListingCard
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <ListingCard
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <ListingCard
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <ListingCard
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <ListingCard
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <ListingCard
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
