import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header textAlign="centered"><Icon name="user" />Log In</Header>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={11}>
            <Form>
              <Form.Field width="8">
                <label htmlFor="email">Email</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="email">Password</label>
                <input type="password" placeholder="Password" />
              </Form.Field>
              <Form.Field width="8">
                <Button type="submit">Login</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
