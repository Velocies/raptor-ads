import React from 'react';
import { Modal, Form, Button, Header } from 'semantic-ui-react';

const ReplyFormModal = ({ onChange, onSubmit, listingId, userId }) =>
  <Modal trigger={<Button>Contact Them!</Button>}>
    <Modal.Header>Contact Form</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Send Them A Message!</Header>
        <Form onSubmit={e => onSubmit(e, listingId, userId)}>
          <Form.Input
            name="title"
            label="Subject"
            placeholder="Subject"
            onChange={e => onChange(e)}
          />
          <Form.TextArea
            name="body"
            label="Message"
            placeholder="Tell them who you are and why you are contacting them..."
            onChange={e => onChange(e)}
          />
          <Form.Button>Send Message</Form.Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>;

ReplyFormModal.propTypes = {
  listingId: React.PropTypes.number.isRequired,
  userId: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default ReplyFormModal;
