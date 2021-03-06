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

  componentDidMount() {
    this.props.dispatch(getUserDetails(this.props.userId));
    this.props.dispatch(getUserProfileListings(this.props.userId));
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
      userListings = this.props.profileUserListings;
      isLoggedInUser = true;
    }
    console.log('USER LISTINGS', userListings);
    return (
      <Container textAlign="center">
        { this.props.userId === loggedInUser.id && this.props.path && (<ProfileNavbar current={this.props.path} userId={this.props.userId} />)}
        { this.props.path === 'dashboard' || !this.props.path ? <ProfileDashboard isLoggedInUser={isLoggedInUser} user={thisUser} userListings={userListings} onListingClick={this.onListingClick} /> : '' }
        { this.props.path === 'inbox' && <Inbox userId={this.props.userId}/> }
        { this.props.path === 'settings' &&
          (<ProfileSettings
            onUpdateClick={this.onUpdateClick}
            onDeleteClick={this.onDeleteClick}
            onChange={this.onChange}
            {...this.props.profileForm }
          />)
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
