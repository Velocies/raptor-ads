import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';

export default class CustomerSignup extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <div className="signup-buttons">
          <Header textAlign='center'><Icon name="user" />Customer Sign Up</Header>
        </div>
        <Grid width={16}>
          <Grid.Column width={5}>
          </Grid.Column>
          <Grid.Column width={11}>
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
    );
  }
}
