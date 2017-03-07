import React from 'react';
import { Card, Image, Icon, Container, Header } from 'semantic-ui-react';
import truncate from '../helpers/truncate';

const getIconString = str => (
  str === 'home improvement' ? 'home' : 'laptop'
);

const Listing = ({ userId, listingId, title, createdAt, body, type, handleDelete, pathname, onListingClick }) =>
  <Card
    centered
    raised
    color="green"
    onClick={() => onListingClick(listingId)}
  >
    <Card.Content>
      <Image floated="right">
        <Icon name={getIconString(type)} size="big" />
      </Image>
      <Card.Header>
        <Header as={'h3'} color="green">
          { title }
        </Header>
      </Card.Header>
      <Card.Meta>
        { createdAt }
      </Card.Meta>
      <Card.Description>
        { truncate(body) }
      </Card.Description>
    </Card.Content>
  </Card>;


Listing.propTypes = {
  title: React.PropTypes.string.isRequired,
  createdAt: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  userId: React.PropTypes.number,
  listingId: React.PropTypes.number.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
  pathname: React.PropTypes.string.isRequired,

};

export default Listing;
