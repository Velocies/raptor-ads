import React from 'react';
import { Icon, Label, Header, Modal, Button } from 'semantic-ui-react';

const ListingDeleteModal = ({ handleDelete, id }) =>
  <Modal
    trigger={<Label
      className="deleteIcon"
      circular floating
    >
      <Icon name="delete" color="red" />
    </Label>}
    closeIcon="close"
  >
    <Header icon="archive" content="Archive Old Messages" />
    <Modal.Content>
      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => handleDelete(id)} color="green">
        <Icon name="checkmark" /> Yes, please delete this listing.
      </Button>
    </Modal.Actions>
  </Modal>;


ListingDeleteModal.propTypes = {
  handleDelete: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired,
};
export default ListingDeleteModal;
