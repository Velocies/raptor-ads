import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  render() {
    return <h2>UserDetails</h2>;
  }
}

export default connect(state=>state)(UserDetails);
