import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  constructor(props) {
    super(props);
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
