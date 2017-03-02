import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Modal } from 'semantic-ui-react';
import deleteProfileModal from './deleteProfileModal';
import { updateFormField, getCurrentProfile, updateProfile, deleteProfile } from '../../actions/profileActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
  }

  onChange(e) {
    this.props.dispatch(updateFormField(e.target.name, e.target.value));
    this.props.profileForm.profileUpdated = false;
  }

  componentDidMount() {
    this.props.dispatch(getCurrentProfile(this.props.loggedInUser));
  }

  onUpdateClick() {
    this.props.dispatch(updateProfile(this.props.profileForm));
  }

  onDeleteClick() {
    this.props.dispatch(deleteProfile(this.props.loggedInUser));
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      businessName,
      address,
      city,
      zip,
      state,
      country,
      role,
      profileUpdated,
    } = this.props.profileForm;
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
                value={firstName}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
             <Form.Field width="8">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
            <Form.Field width="8">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
            { role === 'customer' ? '' :
              <Form.Field width="8">
                <label htmlFor="businessName">Business</label>
                <input
                  id="businessName"
                  name="businessName"
                  value={businessName}
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
            }
            <Form.Field width="8">
              <label htmlFor="adress">Address</label>
              <input
                id="address"
                name="address"
                value={address}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
            <Form.Field width="8">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                value={city}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
            <Form.Field width="8">
              <label htmlFor="zip">Zip</label>
              <input
                id="zip"
                name="zip"
                value={zip}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
            <Form.Field width="8">
              <label htmlFor="state">State</label>
              <input
                id="state"
                name="state"
                value={state}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
            <Form.Field width="8">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                name="country"
                value={country}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
            <Form.Field width="8">
              <Button type="button" onClick={() => this.onUpdateClick()}>
                Update Profile
              </Button>
              <deleteProfileModal />
              { profileUpdated ?
                <label htmlFor="profileUpdated">Profile Updated!</label>
                : null
              }
            </Form.Field>
          </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { profileForm } = state.profile;
  const { loggedInUser } = state.auth;
  return {
    profileForm,
    loggedInUser,
  };
};

export default connect(mapStateToProps)(Profile);
