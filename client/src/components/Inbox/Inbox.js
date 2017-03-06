import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Grid, Image, Header, Divider, Message, List, Loader, Button, Modal, Form, Card } from 'semantic-ui-react';

class Inbox extends Component {

  render() {
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">-- Inbox -- <br /></Header>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return ({});
};

export default connect(mapStateToProps)(Inbox);
