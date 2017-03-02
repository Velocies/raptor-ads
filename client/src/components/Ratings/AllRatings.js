import React, { Component } from 'react';
import { Container, Header, Card, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ratingsHeader from '../helpers/ratingsHeader';
import RatingCard from './RatingCard';
import { getUserRatings } from './actions';

class AllRatings extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatch(getUserRatings(userId));
  }

  render() {
    const { currentUserRatings, ratingsForm, isFetching } = this.props;
    if (isFetching) { return <Loader active inline="centered" />; }

    return (
      <Container textAlign='center'>
        <Header>{ratingsHeader(currentUserRatings)}</Header>
        <Card.Group>
          {currentUserRatings.ratings.map(r =>
            <RatingCard
              key={r.id}
              stars={r.stars}
              editable={false}
              content={r.content}
              rater={r.rater}
            />
          )}
        </Card.Group>
      </Container>
    );
  }
}

AllRatings.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { currentUserRatings, isFetching } = state.ratings;
  const { ratingsForm } = state.ratings;
  const { pathname } = state.routing.locationBeforeTransitions;
  const userId = pathname.split('/')[2];

  return {
    currentUserRatings,
    ratingsForm,
    isFetching,
    userId,
  };
};

export default connect(mapStateToProps)(AllRatings);
