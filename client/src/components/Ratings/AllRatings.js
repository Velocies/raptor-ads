import React, { Component } from 'react';
import { Container, Header, Card, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ratingsHeader from '../helpers/ratingsHeader';

class AllRatings extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getUserRatings());
  }

  render() {
    const { currentUserRatings, ratingsForm, isFetching } = this.props;
    if (isFetching) { return <Loader active inline="centered" />; }

    return (
      <Header>{ratingsHeader(currentUserRatings)}</Header>
    );
  }
}

AllRatings.propTypes = {
  dispatch: React.Proptypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { currentUserRatings, isFetching } = state.ratings;
  const { ratingsForm } = state.ratingsForm;

  return { currentUserRatings, ratingsForm };
};

export default connect(mapStateToProps)(AllRatings);
