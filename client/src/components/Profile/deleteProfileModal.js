import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const deleteProfileModal = () =>
  <Modal
    trigger={
      <Button
        className="ui red right floated button"
        type="button"
      >
      Delete Profile
      </Button>
    }
  >
    <Header icon="trash outline" content="Delete Profile" />
    <Modal.Content>
      <p>Are you sure you want to delete your profile?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        onClick={() => this.onDeleteClick()}
        color="red"
      >
      Yes, I am sure.
      </Button>
    </Modal.Actions>
  </Modal>;

export default deleteProfileModal;
