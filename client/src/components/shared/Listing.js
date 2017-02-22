import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const Listing = ({ title, createdAt, body }) =>
  <Card centered raised>
    <Card.Content>
      <Image floated="right">
        <Icon name="home" size="big" />
      </Image>
      <Card.Header>
        { title }
      </Card.Header>
      <Card.Meta>
        { createdAt }
      </Card.Meta>
      <Card.Description>
        { body }
      </Card.Description>
    </Card.Content>
  </Card>;

Listing.propTypes = {
  title: React.PropTypes.string.isRequired,
  createdAt: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
};

export default Listing;
