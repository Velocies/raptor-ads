import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import { push } from 'react-router-redux';
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
    this.onListingClick = this.onListingClick.bind(this);
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
    }

  }

  onUpdateClick() {
    this.props.dispatch(updateProfile(this.props.profileForm));
  }

  onDeleteClick() {
    this.props.dispatch(deleteProfile(this.props.loggedInUser));
  }

  onListingClick(listingId) {
    this.props.dispatch(push(`/listings/${listingId}`));
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
      profile_img_path,
    } = this.props.profileForm;
    console.log('PATHNAME NEW IS', this.props.path)
    const display = this.props.display;
    const loggedInUser = this.props.loggedInUser;
    let thisUser;
    let userListings;
    let isLoggedInUser = false;
    if (this.props.userId !== loggedInUser.id) {
      thisUser = this.props.currentUserDetails;
      userListings = this.props.profileUserListings;
    } else {
      thisUser = loggedInUser;
      userListings = this.props.userListings;
      isLoggedInUser = true;
    }
    return (
      <Container textAlign="center">
        { this.props.userId === loggedInUser.id && this.props.path && (<ProfileNavbar current={this.props.path} userId={this.props.userId} />)}
        { this.props.path === 'dashboard' || !this.props.path ? <ProfileDashboard isLoggedInUser={isLoggedInUser} user={thisUser} userListings={userListings} onListingClick={this.onListingClick} /> : '' }
        { this.props.path === 'inbox' && <Inbox userId={this.props.userId}/> }
        { this.props.path === 'settings' ?
          <ProfileSettings
            firstName={firstName}
            lastName={lastName}
            email={email}
            businessName={businessName}
            address={address}
            city={city}
            zip={zip}
            state={state}
            profile_img_path={profile_img_path}
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
  const { profileForm, profileUserListings } = state.profile;
  const { loggedInUser } = state.auth;
  const { userListings } = state.listing;
  const display = state.profile.display;
  const { pathname } = state.routing.locationBeforeTransitions;
  const { currentUserDetails } = state.userDetails;
  let userId;
  pathname !== '/profile' ? userId = parseInt(pathname.split('/')[2]) : userId = false;
  const path = pathname.split('/')[3]

  return {
    profileForm,
    loggedInUser,
    display,
    userId,
    currentUserDetails,
    userListings,
    profileUserListings,
    path,
  };
};

export default connect(mapStateToProps)(Profile);
