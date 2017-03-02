import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import { getUserDetails } from '../UserDetails/actions';
import { changeStars, changeForm, submitRatingsForm } from '../Ratings/actions';

class NewRating extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatch(getUserDetails(userId));
    this.onStarClick = this.onStarClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onStarClick(next) {
    this.props.dispatch(changeStars(next));
  }

  onChange(e) {
    this.props.dispatch(changeForm(e.target.name, e.target.value));
  }

  onSubmit(e) {
    e.preventDefault();
    const { userId, stars, content } = this.props;
    const raterId = this.props.rater.id;

    const payload = {
      userId,
      stars,
      content,
      raterId,
    };

    this.props.dispatch(submitRatingsForm(payload));
  }

  render() {
    const {
      user,
      content,
      stars,
    } = this.props;

    return (
      <Container textAlign="center">
        <h1>
          Rate { `${user.firstName} ${user.lastName}!` }
        </h1>
        <Form onSubmit={(e) => this.onSubmit(e)}>
          <h4>Stars</h4>
          <StarRatingComponent
            name={"stars"}
            value={+stars}
            editing={true}
            starColor="#31b234"
            onStarClick={(next) => { this.onStarClick(next); }}
          />
          <Form.TextArea
            className="ratingContent"
            label="Review"
            placeholder="Write a review..."
            value={content}
            name="content"
            onChange={(e) => this.onChange(e)}
          />
          <Button type="submit">Submit Rating</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { pathname } = state.routing.locationBeforeTransitions;
  const { content, stars } = state.ratings.ratingsForm;
  const user = state.userDetails.currentUserDetails;
  const { loggedInUser: rater } = state.auth;
  const userId = pathname.split('/')[2];

  return ({
    userId,
    user,
    rater,
    content,
    stars,
  });
};

export default connect(mapStateToProps)(NewRating);
