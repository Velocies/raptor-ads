import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import moment from 'moment';
import { Container, Grid, Image, Header, Divider, Message, List, Loader } from 'semantic-ui-react';
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

  cutBody(body) {
    let newBody;
    if (body.length > 20) {
      newBody = `${body.slice(0, 20)}...`;
      return newBody;
    }
    return body;
  }

  render() {
    const { isFetching, currentListing, userListings } = this.props;
    console.log('Listing ID: ', this.listingId);

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
              <Grid.Row>
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
              </Grid.Row>
            </Grid.Column>
          </Grid>

          <Divider clearing />
          <Divider hidden />

          <Grid textAlign="center">
            <Header as="h3" className="center">Related Listings</Header>
            <Grid.Row columns={3}>
              <Grid.Column>
                {
                  (() => {
                    if (userListings[0]) {
                      return (<Listing
                        key={userListings[0].id}
                        listingId={userListings[0].id}
                        title={userListings[0].title}
                        createdAt={this.convertTime(userListings[0].createdAt)}
                        body={userListings[0].body}
                        type={userListings[0].type}
                        cutBody={this.cutBody}
                      />);
                    }
                    return <Image src="http://semantic-ui.com/images/wireframe/media-paragraph.png" />;
                  })()
                }
              </Grid.Column>
              <Grid.Column>
                {
                  (() => {
                    if (userListings[1]) {
                      return (<Listing
                        key={userListings[1].id}
                        listingId={userListings[1].id}
                        title={userListings[1].title}
                        createdAt={this.convertTime(userListings[1].createdAt)}
                        body={userListings[1].body}
                        type={userListings[1].type}
                        cutBody={this.cutBody}
                      />);
                    }
                    return <Image src="http://semantic-ui.com/images/wireframe/media-paragraph.png" />;
                  })()
                }
              </Grid.Column>
              <Grid.Column>
                {
                  (() => {
                    if (userListings[2]) {
                      return (<Listing
                        key={userListings[2].id}
                        listingId={userListings[2].id}
                        title={userListings[2].title}
                        createdAt={this.convertTime(userListings[2].createdAt)}
                        body={userListings[2].body}
                        type={userListings[2].type}
                        cutBody={this.cutBody}
                      />);
                    }
                    return <Image src="http://semantic-ui.com/images/wireframe/media-paragraph.png" />;
                  })()
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Message>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentListing, userListings, isFetching } = state.listing;
  const { id } = state.auth.loggedInUser;
  const { pathname } = state.routing.locationBeforeTransitions;

  const listingId = pathname.split('/')[2];
  return {
    id,
    currentListing,
    userListings,
    isFetching,
    listingId,
  };
};

FullListing.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(FullListing);
