import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeSignupField } from '../../actions';

class CustomerSignup extends Component {
  constructor(props) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault()
  }

  onChange(e) {
    console.log('e', e.target.name, e.target.value)
    this.props.dispatch(changeSignupField(e.target.name, e.target.value))
  }

  render() {
    const { firstName, lastName, email, password, passwordConfirmation } = this.props.signupForm
    return(
      <div>
        <div className="signup-buttons">
          <Header textAlign='center'><Icon name="user" />Customer Sign Up</Header>
        </div>
        <Grid width={16}>
          <Grid.Column width={5}>
          </Grid.Column>
          <Grid.Column width={11}>
            <Form onSubmit={(e)=>this.onSubmit(e)}>
              <Form.Field width="8">
                <label>First Name</label>
                <input
                  name="firstName"
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label>Last Name</label>
                <input
                  name="lastName"
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label>Email</label>
                <input
                  name="email"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label>Password</label>
                <input
                  name="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label>Confirm Password</label>
                <input
                  name="passwordConfirmation"
                  placeholder='Confirm Password'
                  value={passwordConfirmation}
                  onChange={(e) => this.onChange(e)}
                />
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

const mapStateToProps = (state) => {
  const { signupForm } = state.auth
  return {
    signupForm
  }
}

export default connect(mapStateToProps)(CustomerSignup)

