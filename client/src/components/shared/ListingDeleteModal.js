import React from 'react';
import { Icon, Label, Header, Modal, Button } from 'semantic-ui-react';

const ListingDeleteModal = ({ handleDelete, listingId, userId }) =>
  <Modal
    trigger={
      <Label
        className="deleteIcon"
        circular
        floating
      >
        <Icon name="delete" color="red" />
      </Label>
    }
    basic
    size="small"
  >
    <Header icon="trash outline" content="Delete Listing" />
    <Modal.Content>
      <p>Are you sure you would like to delete this listing?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="red" inverted>
        <Icon name="remove" /> No
      </Button>
      <Button
        onClick={() => handleDelete(listingId)}
        color="green"
        inverted
      >
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>;

ListingDeleteModal.propTypes = {
  listingId: React.PropTypes.number.isRequired,
  userId: React.PropTypes.number.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
};

export default ListingDeleteModal;
