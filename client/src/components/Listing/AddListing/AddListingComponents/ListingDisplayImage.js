import React from 'react';
import { Image, Icon, Label, Header, Modal, Button } from 'semantic-ui-react';

const ListingDisplayImage = ({ image }) => {
  return (
    <Modal trigger={<Image src={image} size="small" wrapped />} basic size='small'>
      <Header icon='trash outline' content='Delete Listing' />
      <Modal.Content>
        <p>Are you sure you would like to delete this picture?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};


export default ListingDisplayImage;