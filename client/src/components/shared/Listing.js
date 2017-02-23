import React from 'react';
import { Card, Image, Icon, Label } from 'semantic-ui-react';

const Listing = ({ id, title, createdAt, body }) =>
  <Card centered raised>
    <Card.Content>
      <Label className="deleteIcon" circular floating><Icon name="delete" color="red" /></Label>
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
