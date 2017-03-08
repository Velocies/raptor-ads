import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import ProfileDashboard from './ProfileDashboard';
import Inbox from './Inbox/Inbox';
import ProfileSettings from './profileSettings';
import ProfileNavbar from './profileNavbar';
import { updateFormField, getCurrentProfile, updateProfile, deleteProfile, changeDisplay, getUserProfileListings } from '../../actions/profileActions';
import { getUserDetails } from '../UserDetails/actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  onChange(e) {
    this.props.dispatch(updateFormField(e.target.name, e.target.value));
    this.props.profileForm.profileUpdated = false;
  }

  componentWillMount() {
    if (this.props.loggedInUser.id !== this.props.userId) {
      this.props.dispatch(getUserDetails(this.props.userId));
      this.props.dispatch(getUserProfileListings(this.props.userId));
    } else {
      this.props.dispatch(getUserProfileListings(loggedInUser.id));
    }
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
    let thisUser;
    if (this.props.userId !== loggedInUser.id) {
      thisUser = this.props.currentUserDetails;
    } else {
      thisUser = loggedInUser;
    }
    console.log('THIS USER', thisUser);
    return (
      <Container textAlign="center">
        {this.props.userId === loggedInUser.id && (<ProfileNavbar changeDisplay={this.changeDisplay} current={display} />)}
        { display === 'dashboard' ? <ProfileDashboard user={thisUser} /> : '' }
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
  const { currentUserDetails } = state.userDetails;
  let userId;
  pathname !== '/profile' ? userId = parseInt(pathname.split('/')[2]) : userId = false;

  return {
    profileForm,
    loggedInUser,
    display,
    userId,
    currentUserDetails,
  };
};

export default connect(mapStateToProps)(Profile);
