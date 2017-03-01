import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import moment from 'moment';
import { Container, Grid, Image, Header, Divider, Message, List, Loader, Button, Modal } from 'semantic-ui-react';
import GoogleMapContainer from './AllListings/AllListingsComponents/GoogleMap/GoogleMapContainer';
import { getCurrentListing } from '../../actions/fullListingActions';
import Listing from '../shared/Listing';

class FullListing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Listing ID: ', this.props.listingId);
    this.props.dispatch(getCurrentListing(this.props.listingId));
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  render() {
    const { isFetching, currentListing, userListings } = this.props;

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
                      <List.Content>Customer Name</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="marker" />
                      <List.Content>New York, NY</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="mail" />
                      <List.Content>
                        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
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
                <Divider hidden/>
                <Grid.Column>
                  <Modal>

                  </Modal>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid>

          <Divider clearing />
          <Divider hidden />

          <Grid textAlign="center">
            <Header as="h3" className="center">Consumer Ratings</Header>

          </Grid>

        </Message>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentListing, userListings, isFetching } = state.listing;
  const { loggedInUser } = state.auth;

  return {
    loggedInUser,
    currentListing,
    userListings,
    isFetching,
  };
};

FullListing.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(FullListing);
