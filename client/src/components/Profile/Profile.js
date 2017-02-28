import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Icon, Header } from 'semantic-ui-react';
import {  } from '../../actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.dispatch()
  }

  render() {
    const user = this.props.user;
    console.log(user)
    return (
      <div>
        <div>
          <Header textAlign="center">Your Profile</Header>
        </div>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={11}>
          <Form>
            <Form.Field width="8">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={user.first_name}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
          </Form>
          </Grid.Column>
        </Grid>
        <h1>PROFILE COMPONENT HERE</h1>
        <h2>{user.email}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const user = state.auth.loggedInUser;
  return {
    user,
  };
};

export default connect(mapStateToProps)(Profile);
