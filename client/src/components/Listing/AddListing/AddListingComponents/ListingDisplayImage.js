import React from 'react';
import { Image, Icon, Header, Modal, Button } from 'semantic-ui-react';

const ListingDisplayImage = ({ image, handleDelete, index }) =>
  <Modal
    trigger={<Image src={image.img_path} size="small" wrapped />}
    closeIcon="close"
  >
    <Header icon="trash outline" content="Delete Image" />
    <Modal.Content>
      <p>Are you sure you want to delete this picture?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => handleDelete(index)} color="green">
        <Icon name="checkmark" /> Yes, please delete this picture.
      </Button>
    </Modal.Actions>
  </Modal>;

ListingDisplayImage.propTypes = {
  handleDelete: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default ListingDisplayImage;
