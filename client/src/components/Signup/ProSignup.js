import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeSignupField } from '../../actions';

class ProSignup extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.dispatch(changeSignupField(e.target.name, e.target.value));
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      businessName,
    } = this.props.signupForm;
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
                <label htmlFor="firstName">First Name</label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="lastName">Last Name</label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="businessName">Business Name</label>
                <input
                  placeholder="Business Name"
                  name="businessName"
                  value={businessName}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  placeholder="Confirm Password"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={e => this.onChange(e)}
                />
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

ProSignup.propTypes = {
  signupForm: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    businessName: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    passwordConfirmation: React.PropTypes.string.isRequired,
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { signupForm } = state.auth;
  return {
    signupForm,
  };
};

export default connect(mapStateToProps)(ProSignup);
