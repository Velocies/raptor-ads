import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import { Container, Grid, Image, Header, Divider, Message, List, Loader } from 'semantic-ui-react';
import { getCurrentListing } from '../../actions/fullListingActions';
import GoogleMapContainer from './AllListings/AllListingsComponents/GoogleMap/GoogleMapContainer';

class FullListing extends Component {
  constructor(props) {
    super(props);
    this.listingId = this.props.params.id;
  }

  componentDidMount() {
    this.props.dispatch(getCurrentListing(this.listingId));
  }

  render() {
    const { isFetching, currentListing } = this.props;
    console.log('FullListing props: ', this.props);

    if (isFetching) {
      return <Loader active inline="centered" />;
    }

    return (
      <Container textAlign="center">
        <Header as="h1" className="center">-- {currentListing.title || 'Current Listing'} -- <br /></Header>
        <Header as="h4" className="center" color="grey">{currentListing.createdAt || 'Time Created'}</Header>

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
                    currentListing.pictures.map((p, index) => {
                      return <Image key={index} src={p.img_path} />;
                    })
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
                <Image src="http://semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="http://semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="http://semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Message>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentListing, isFetching } = state.listing;
  const { id } = state.auth.loggedInUser;
  return {
    id,
    currentListing,
    isFetching,
  };
};

FullListing.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(FullListing);
