import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Modal } from 'semantic-ui-react';
import DeleteProfileModal from './deleteProfileModal';
import ProfileSettings from './profileSettings';
import { updateFormField, getCurrentProfile, updateProfile, deleteProfile } from '../../actions/profileActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
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
      role,
      profileUpdated,
      business,
    } = this.props.profileForm;
    return (
      <ProfileSettings
        firstName={firstName}
        lastName={lastName}
        email={email}
        businessName={businessName}
        address={address}
        city={city}
        zip={zip}
        state={state}
        role={role}
        profileUpdated={profileUpdated}
        business={business}
        onUpdateClick={this.onUpdateClick}
        onDeleteClick={this.onDeleteClick}
        onChange={this.onChange}
      />
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
