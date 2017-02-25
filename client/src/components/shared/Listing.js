import React from 'react';
import { Card, Image, Icon, Label } from 'semantic-ui-react';
import ListingDeleteModal from './ListingDeleteModal';

const getIconString = (str) =>
  str === "home improvement" ? "home" : "laptop";

const Listing = ({ id, title, createdAt, body, type, handleDelete }) =>
  <Card className="listingCard" centered raised>
    <Card.Content>
      <ListingDeleteModal handleDelete={handleDelete} id={id}/>
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
};

export default Listing;
