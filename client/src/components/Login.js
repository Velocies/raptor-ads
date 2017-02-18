import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Grid, Header } from 'semantic-ui-react'

export default class Login extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Grid textAlign="center" width={16}>
          <Grid.Column width={5}>
          </Grid.Column>
          <Grid.Column width={11}>
            <Form>
              <Form.Field width="8">
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field width="8">
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Form.Field width="8">
                <Button type='submit'>Login</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
