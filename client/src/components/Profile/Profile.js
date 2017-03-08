import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import ProfileDashboard from './ProfileDashboard';
import Inbox from './Inbox/Inbox';
import ProfileSettings from './profileSettings';
import ProfileNavbar from './profileNavbar';
import { updateFormField, getCurrentProfile, updateProfile, deleteProfile, changeDisplay } from '../../actions/profileActions';
// import { getUserDetails } from '../actions';

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
    // this.user = null;
    // if (this.props.loggedInUser === this.props.userId) {
    //   this.user = this.props.dispatch(getCurrentProfile(this.props.loggedInUser));
    // } else {
    //   this.user = this.props.di
    // }
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
    const loggedInUser = this.props.loggedInUser;
    console.log('DISPLAY', loggedInUser);
    return (
      <Container textAlign="center">
        {this.props.userId === loggedInUser.id && (<ProfileNavbar changeDisplay={this.changeDisplay} current={display} />)}
        { display === 'dashboard' ? <ProfileDashboard loggedInUser={loggedInUser} /> : '' }
        { display === 'inbox' ? <Inbox /> : '' }
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
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { profileForm } = state.profile;
  const { loggedInUser } = state.auth;
  const display = state.profile.display;
  const { pathname } = state.routing.locationBeforeTransitions;
  let userId;
  pathname !== '/profile' ? userId = parseInt(pathname.split('/')[2]) : userId = false;

  return {
    profileForm,
    loggedInUser,
    display,
    userId,
  };
};

export default connect(mapStateToProps)(Profile);
