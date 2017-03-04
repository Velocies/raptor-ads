import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Carousel from 'nuka-carousel';
import moment from 'moment';
import { Container, Grid, Image, Header, Divider, Message, List, Loader, Button, Modal, Form, Card } from 'semantic-ui-react';
import GoogleMapContainer from './AllListings/AllListingsComponents/GoogleMap/GoogleMapContainer';
import { getCurrentListing, changeContactField, sendMessage } from '../../actions/fullListingActions';
import { clearErrors } from '../../actions/listingActions';
import RatingCard from '../Ratings/RatingCard';

class FullListing extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getCurrentListing(this.props.listingId));
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Submit occurred!');
    const data = this.props.contactForm;
    const postId = this.props.listingId;
    const senderId = this.props.loggedInUser.id;
    const userId = this.props.currentListing.user.id;
    const payload = { title: data.title, body: data.body, postId, userId, senderId };
    this.props.dispatch(clearErrors());
    this.props.dispatch(sendMessage(payload));
  }

  onChange(e, data) {
    if (data) {
      this.props.dispatch(changeContactField('type', data.value));
    } else {
      this.props.dispatch(changeContactField(e.target.name, e.target.value));
    }
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  renderRecentRatings(ratings) {
    if (!ratings) { return []; }
    return ratings
      .slice(0, 3)
      .map(r =>
        <RatingCard
          stars={r.stars}
          editable={false}
          content={r.content}
          rater={r.rater}
        />);
  }


  render() {
    const { isFetching, currentListing, userListings } = this.props;
    if (isFetching) {
      return <Loader active inline="centered" />;
    }
    const currentListingArray = [currentListing];
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">-- {currentListing.title || 'Current Listing'} -- <br /></Header>
        <Header as="h4" className="center" color="grey">{`Created ${this.convertTime(currentListing.createdAt)}` || 'Time Created'}</Header>

        <Divider />

        <Message color="grey">
          <Grid columns={2} textAlign="left">
            <Grid.Column>
              <Header as="h2" className="center">Job Description</Header>
              <Grid.Row>
                <p>{currentListing.body}</p>
              </Grid.Row>
              <Grid.Row verticalAlign="bottom">
                <Divider hidden section />
                <Carousel>
                  {
                    currentListing.pictures.map(p => <Image key={p.id} src={p.img_path} />)
                  }
                </Carousel>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <GoogleMapContainer markers={currentListingArray}/>
              </Grid.Row>
              <Divider hidden />
              <Grid.Row columns={2}>
                <Grid.Column>
                  <List>
                    <List.Item>
                      <List.Icon name="users" />
                      <List.Content>
                        <Link to={`/user/${currentListing.user.id}/details`}>
                          {`${currentListing.user.firstName} ${currentListing.user.lastName}` || 'Customer Name'}
                        </Link>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="marker" />
                      <List.Content>{`${currentListing.user.city}, ${currentListing.user.state}`}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="mail" />
                      <List.Content>
                        <a href={`${currentListing.user.email}`}>{`${currentListing.user.email}`}</a>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Divider hidden />
                <Grid.Column>
                  <Modal trigger={<Button>Contact Them!</Button>}>
                    <Modal.Header>Contact Form</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <Header>Send Them A Message!</Header>
                        <Form onSubmit={e => this.onSubmit(e)}>
                          <Form.Input
                            name="title"
                            label="Subject"
                            placeholder="Subject"
                            onChange={e => this.onChange(e)}
                          />
                          <Form.TextArea
                            name="body"
                            label="Message"
                            placeholder="Tell them who you are and why you are contacting them..."
                            onChange={e => this.onChange(e)}
                          />
                          <Form.Button>Send Message</Form.Button>
                        </Form>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid>

          <Divider clearing />
          <Divider hidden />
          <Grid centered>
            <Grid.Row>
              <Header as="h3">
                {`Recent Ratings for ${currentListing.user.firstName}`}
              </Header>
            </Grid.Row>
            { currentListing.user.ratings && !currentListing.user.ratings.length ?
              <span>No Ratings for { currentListing.user.firstName }</span> :
              <Grid>
                <Grid.Row centered>
                  <Card.Group>
                    { this.renderRecentRatings(currentListing.user.ratings) }
                  </Card.Group>
                </Grid.Row>
                <Grid.Row>
                  <Link to={`/user/${currentListing.user.id}/ratings`}>
                    View All
                  </Link>
                </Grid.Row>
              </Grid>
            }
          </Grid>
        </Message>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentListing, userListings, isFetching } = state.listing;
  const { contactForm } = state.messages;
  const { user } = state.listing.currentListing;
  const { loggedInUser } = state.auth;
  const { pathname } = state.routing.locationBeforeTransitions;

  const listingId = pathname.split('/')[2];

  return {
    loggedInUser,
    currentListing,
    contactForm,
    userListings,
    isFetching,
    listingId,
    user,
  };
};

FullListing.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(FullListing);
