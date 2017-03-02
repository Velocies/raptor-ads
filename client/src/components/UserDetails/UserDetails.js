import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Container, Header, List } from 'semantic-ui-react';
import { getUserDetails } from './actions';

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatch(getUserDetails(userId));
  }

  render() {
    const { user } = this.props;
    return (
      <Container centered textAlign="center">
        <Header>
          { `${user.firstName} ${user.lastName} Details` }
        </Header>
        <Link to={`/user/${user.id}/ratings/new`}>
          Write a Review for { user.firstName }
        </Link>
        <List>
          <List.Item>
            <List.Header>Member Since:</List.Header>
            { new Date(user.createdAt).toLocaleDateString() }
          </List.Item>
          <List.Item>
            <List.Header>Posts Created:</List.Header>
            10
          </List.Item>
          <List.Item>
            <List.Header>Number of Reviews:</List.Header>
            10
          </List.Item>
          <List.Item>
            <List.Header>Review Average:</List.Header>
            3.4
          </List.Item>
        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { pathname } = state.routing.locationBeforeTransitions;
  const userId = pathname.split('/')[2];
  const user = state.userDetails.currentUserDetails;

  return ({ userId, user });
};


export default connect(mapStateToProps)(UserDetails);
