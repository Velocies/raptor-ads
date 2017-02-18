import React from 'react';
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'

export const Signup = () =>
  <Container textAlign='center'>
    <Form>
      <Form.Group >
        <Form.Field >
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
      </Form.Group>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
  </Container>
