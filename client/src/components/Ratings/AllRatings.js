import React, { Component } from 'react';
import { Container, Header, Card, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ratingsHeader from '../helpers/ratingsHeader';

class AllRatings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUserRatings, ratingsForm, isFetching } = this.props;
    if (isFetching) { return <Loader active inline="centered" />; }

    return (
      <Header>{}</Header>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUserRatings, isFetching } = state.ratings;
  const { ratingsForm } = state.ratingsForm;

  return { currentUserRatings, ratingsForm };
};

export default connect(mapStateToProps)(AllRatings);
