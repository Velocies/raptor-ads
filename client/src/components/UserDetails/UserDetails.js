import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDetails } from './actions';
import { Container } from 'semantic-ui-react';

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatch(getUserDetails(userId));
  }

  render() {
    <Container>
      
    </Container>
  }
}

const mapStateToProps = (state) => {
  const { pathname } = state.routing.locationBeforeTransitions;
  const userId = pathname.split('/')[2];

  return ({ userId });
};


export default connect(mapStateToProps)(UserDetails);
