import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { changeSignupField, customerSignup, clearErrors } from '../../actions';

class ProSignup extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getFormClass = this.getFormClass.bind(this);
  }

  onChange(e) {
    this.props.dispatch(changeSignupField(e.target.name, e.target.value));
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.props.signupForm;
    data.role = 'professional';
    this.props.dispatch(clearErrors());
    this.props.dispatch(customerSignup(data));
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
      businessName,
    } = this.props.signupForm;

    const { formErrors } = this.props;
    return (
      <div>
        <div className="signup-buttons">
          <Header textAlign="center"><Icon name="travel" />Professional Signup</Header>
        </div>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={11}>
            {formErrors.userExists && <span className="formError">{formErrors.userExists}</span>}
            {formErrors.firstName && <span className="formError">{formErrors.firstName}</span>}
            <Form onSubmit={e => this.onSubmit(e)}>
              <Form.Field width="8">
                <label htmlFor="firstName">First Name</label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('firstName')}
                />
              </Form.Field>
              {formErrors.lastName && <span className="formError">{formErrors.lastName}</span>}
              <Form.Field width="8">
                <label htmlFor="lastName">Last Name</label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('lastName')}
                />
              </Form.Field>
              {formErrors.email && <span className="formError">{formErrors.email}</span>}
              <Form.Field width="8">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('email')}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="businessName">Business Name</label>
                <input
                  placeholder="Company Name"
                  name="businessName"
                  value={businessName}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              {formErrors.password && <span className='formError'>{formErrors.password}</span>}
              <Form.Field width="8">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => this.onChange(e)}
                  className={this.getFormClass('password')}
                />
              </Form.Field>
              {formErrors.passwordConfirmation && <span className='formError'>{formErrors.passwordConfirmation}</span>}
              <Form.Field width="8">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="passwordConfirmation"
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

ProSignup.propTypes = {
  signupForm: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    passwordConfirmation: React.PropTypes.string.isRequired,
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { signupForm, formErrors } = state.auth;
  return {
    signupForm,
    formErrors,
  };
};

export default connect(mapStateToProps)(ProSignup);
