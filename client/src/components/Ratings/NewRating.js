import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewRating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>New Rating</h1>
    );
  }
}

const mapStateToProps = (state) => {
  const { pathname } = state.routing.locationBeforeTransitions;
  const { content, body } = state.ratings.ratingsForm;
  const userId = pathname.split('/')[2];

  return ({
    userId,
  });
};

export default connect(mapStateToProps)(NewRating);
