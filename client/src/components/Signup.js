import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Grid, Header } from 'semantic-ui-react'

export default class Signup extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Grid textAlign="center" width={14}>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={9}>
            <Form>
              <Form.Field width="8">
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field width="8">
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              <Form.Field width="8">
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field width="8">
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Form.Field width="8">
                <label>Confirm Password</label>
                <input placeholder='Confirm Password' />
              </Form.Field>
              <Form.Field width="8">
                <Button type='submit'>Sign Up</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
