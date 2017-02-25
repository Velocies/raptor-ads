import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import ListingDeleteModal from './ListingDeleteModal';

const getIconString = str => (
  str === 'home improvement' ? 'home' : 'laptop'
);

const Listing = ({ userId, listingId, title, createdAt, body, type, handleDelete }) =>
  <Card centered raised>
    <Card.Content>
      <ListingDeleteModal
        handleDelete={handleDelete}
        userId={userId}
        listingId={listingId}
      />
      <Image floated="right">
        <Icon name={getIconString(type)} size="big" />
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
  type: React.PropTypes.string.isRequired,
  userId: React.PropTypes.number.isRequired,
  listingId: React.PropTypes.number.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
};

export default Listing;
