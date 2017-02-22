import React, { Component } from 'react';
import { Container, Header, Icon, Card } from 'semantic-ui-react';
import Listing from '../shared/Listing';

class CustomerDashboard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">Customer Dashboard</Header>
        <div className="icon-bar">
          <Icon name="home" size="huge" />
          <Icon name="laptop" size="huge" />
        </div>
        <Card.Group itemsPerRow={4} stackable>
          <Listing
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
            title={'Window Repair'}
            createdAt={'1 day ago'}
            body={'fix my window dude'}
          />
          <Listing
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
