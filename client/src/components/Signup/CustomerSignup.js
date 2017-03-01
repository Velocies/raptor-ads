import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { changeSignupField, customerSignup, clearErrors } from '../../actions';

class CustomerSignup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getFormClass = this.getFormClass.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.props.signupForm;
    this.props.dispatch(clearErrors());
    data.role = 'customer';
    this.props.dispatch(customerSignup(data));
  }

  onChange(e) {
    this.props.dispatch(changeSignupField(e.target.name, e.target.value));
  }

  getFormClass(name) {
    return classnames({ fieldInvalid: this.props.formErrors[name] });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      address,
      city,
      zip,
      state,
    } = this.props.signupForm;

    const { formErrors } = this.props;

    return (
      <div>
        <div className="signup-buttons">
          <Header textAlign="center"><Icon name="user" />Customer Sign Up</Header>
        </div>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={11}>
            <Form onSubmit={e => this.onSubmit(e)}>
              {formErrors.userExists && <span className="formError">{formErrors.userExists}</span>}
              {formErrors.firstName && <span className="formError">{formErrors.firstName}</span>}
              <Form.Field width="8">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('firstName')}
                />
              </Form.Field>
              {formErrors.lastName && <span className="formError">{formErrors.lastName}</span>}
              <Form.Field width="8">
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('lastName')}
                />
              </Form.Field>
              {formErrors.email && <span className="formError">{formErrors.email}</span>}
              <Form.Field width="8">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('email')}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="address">Street Address</label>
                <input
                  name="address"
                  placeholder="Street Address"
                  value={address}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="city">City</label>
                <input
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="state">State</label>
                <input
                  name="state"
                  placeholder="State"
                  value={state}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  name="zip"
                  placeholder="Zipcode"
                  value={zip}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              {formErrors.password && <span className="formError">{formErrors.password}</span>}
              <Form.Field width="8">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('password')}
                />
              </Form.Field>
              {formErrors.passwordMatch && <span className="formError">{formErrors.passwordMatch}</span>}
              {formErrors.passwordConfirmation && <span className="formError">{formErrors.passwordConfirmation}</span>}
              <Form.Field width="8">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('passwordConfirmation')}
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

CustomerSignup.propTypes = {
  signupForm: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    passwordConfirmation: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    city: React.PropTypes.string.isRequired,
    state: React.PropTypes.string.isRequired,
    zip: React.PropTypes.string.isRequired,
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { signupForm } = state.auth;
  const { formErrors } = state.auth;
  return {
    signupForm,
    formErrors,
  };
};

export default connect(mapStateToProps)(CustomerSignup);

