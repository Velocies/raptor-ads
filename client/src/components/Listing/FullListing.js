import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Carousel from 'nuka-carousel';
import moment from 'moment';
import { Container, Grid, Image, Header, Divider, Message, List, Loader, Button, Modal, Form, Input, Segment, Card } from 'semantic-ui-react';
import GoogleMapContainer from './AllListings/AllListingsComponents/GoogleMap/GoogleMapContainer';
import { getCurrentListing } from '../../actions/fullListingActions';
import Listing from '../shared/Listing';
import RatingCard from '../Ratings/RatingCard';

class FullListing extends Component {

  componentDidMount() {
    console.log('Listing ID: ', this.props.listingId);
    this.props.dispatch(getCurrentListing(this.props.listingId));
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
    const { isFetching, currentListing, userListings, user } = this.props;
    if (isFetching) {
      return <Loader active inline="centered" />;
    }

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
                <GoogleMapContainer />
              </Grid.Row>
              <Divider hidden />
              <Grid.Row columns={2}>
                <Grid.Column>
                  <List>
                    <List.Item>
                      <List.Icon name="users" />
                      <List.Content>{`${currentListing.user.firstName} ${currentListing.user.lastName}` || 'Customer Name'}</List.Content>
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
                    <List.Item>
                      <List.Icon name="linkify" />
                      <List.Content>
                        <a href="http://www.semantic-ui.com">semantic-ui.com</a>
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
                        <Form>
                          <Form.Input label="Subject" placeholder="Subject" />
                          <Form.TextArea label="Message" placeholder="Tell them who you are and why you are contacting them..." />
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
                <span>No Ratings for { currentListing.user.firstName  }</span> :
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
  const { user } = state.listing.currentListing;
  const { loggedInUser } = state.auth;
  const { pathname } = state.routing.locationBeforeTransitions;

  const listingId = pathname.split('/')[2];

  return {
    loggedInUser,
    currentListing,
    userListings,
    isFetching,
    listingId,
    user,
  };
};

FullListing.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(FullListing);
