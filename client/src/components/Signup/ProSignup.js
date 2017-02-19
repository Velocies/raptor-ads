import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';

export default class ProSignup extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="signup-buttons">
          <Header textAlign="center"><Icon name="travel" />Professional Signup</Header>
        </div>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={11}>
            <Form>
              <Form.Field width="8">
                <label htmlFor="password">First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="password">Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="password">Email</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="password">Password</label>
                <input placeholder="Password" />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="password">Confirm Password</label>
                <input placeholder="Confirm Password" />
              </Form.Field>
              <Form.Field width="8">
                <Button type="submit">Sign Up</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
