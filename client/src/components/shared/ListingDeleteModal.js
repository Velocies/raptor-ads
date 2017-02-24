import React from 'react';
import { Image, Icon, Label, Header, Modal, Button } from 'semantic-ui-react';

const ListingDeleteModal = ({ handleDelete, listingId, id }) => {
  console.log('listing id', listingId);
  return (
    <Modal trigger={<Label
      className="deleteIcon"
      circular floating>
      <Icon
        name="delete"
        color="red"
      />
    </Label>} basic size='small'>
      <Header icon='trash outline' content='Delete Listing' />
      <Modal.Content>
        <p>Are you sure you would like to delete this listing?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button onClick={() => handleDelete(id)} color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};


export default ListingDeleteModal;