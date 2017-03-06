import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileDashboard from './profileDashboard';
import ProfileInbox from './profileInbox';
import ProfileSettings from './profileSettings';
import ProfileNavbar from './profileNavbar';
import { updateFormField, getCurrentProfile, updateProfile, deleteProfile, changeDisplay } from '../../actions/profileActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
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

  changeDisplay(route) {
    this.props.dispatch(changeDisplay(route));
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
    const display = this.props.display;
    return (
      <div>
        <ProfileNavbar changeDisplay={this.changeDisplay} />
        { display === 'dashboard' ?
          <ProfileDashboard />
        : ''
        }
        { display === 'inbox' ?
          <ProfileInbox />
        : ''
        }
        { display === 'settings' ?
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
        : ''
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { profileForm } = state.profile;
  const { loggedInUser } = state.auth;
  const display = state.profile.display;
  return {
    profileForm,
    loggedInUser,
    display,
  };
};

export default connect(mapStateToProps)(Profile);
