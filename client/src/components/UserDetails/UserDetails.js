import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    return <h2>UserDetails</h2>;
  }
}

const mapStateToProps = (state) => {
  const { pathname } = state.routing.locationBeforeTransitions;
  const userId = pathname.split('/')[2];

  return ({ userId });
};


export default connect(mapStateToProps)(UserDetails);
