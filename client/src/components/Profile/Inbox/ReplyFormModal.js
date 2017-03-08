import React from 'react';
import { Modal, Form, Button, Header } from 'semantic-ui-react';

const ReplyFormModal = () => {
  return (
    <Modal trigger={<Button>Contact Them!</Button>}>
      <Modal.Header>Contact Form</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Send Them A Message!</Header>
          <Form>
            <Form.Input
              name="title"
              label="Subject"
              placeholder="Subject"
            />
            <Form.TextArea
              name="body"
              label="Message"
              placeholder="Tell them who you are and why you are contacting them..."
            />
            <Form.Button>Send Message</Form.Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ReplyFormModal;
