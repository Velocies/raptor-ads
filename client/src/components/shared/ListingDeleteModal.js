import React from 'react';
import { Icon, Label, Header, Modal, Button } from 'semantic-ui-react';

const ListingDeleteModal = ({ handleDelete, listingId, userId }) =>
  <Modal
    trigger={<Label
      className="deleteIcon"
      circular floating
    >
      <Icon name="delete" color="red" />
    </Label>}
    closeIcon="close"
  >
    <Header icon="trash outline" content="Delete Image" />
    <Modal.Content>
      <p>Are you sure you want to delete this listing?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => handleDelete(userId, listingId)} color="green">
        <Icon name="checkmark" /> Yes, please delete this listing.
      </Button>
    </Modal.Actions>
  </Modal>;

ListingDeleteModal.propTypes = {
  listingId: React.PropTypes.number.isRequired,
  userId: React.PropTypes.number.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
};

export default ListingDeleteModal;

