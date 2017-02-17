import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

export const CustomerDashboard = () => {
  return (
    <Container textAlign='center'>
      <Header as='h1' className="center">Customer Dashboard</Header>
      <Icon name="home" size="huge" />
      <Icon name="laptop" size="huge"/>
    </Container>
  )
}
