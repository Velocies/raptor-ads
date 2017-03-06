import React from 'react';
import { Icon, Header, Modal, Button } from 'semantic-ui-react';

const ListingDeleteModal = ({ handleDelete, listingId, userId }) =>
  <Modal
    trigger={<Button negative>Delete Listing</Button>}
    closeIcon="close"
  >
    <Header icon="trash outline" content="Delete Image" />
    <Modal.Content>
      <p>Are you sure you want to delete this listing?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => handleDelete(listingId)} color="green">
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

