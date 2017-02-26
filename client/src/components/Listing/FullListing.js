import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Image, Header, Divider, Message, List } from 'semantic-ui-react';
import Carousel from 'nuka-carousel';

class FullListing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, body, images, createdAt } = this.props;
    console.log('FullListing props: ', this.props);
    return (
      <Container textAlign="center">
        <Header as="h1" className="center">-- {title || 'Current Listing'} -- <br /></Header>
        <Header as="h4" className="center" color="grey">{createdAt || 'Time Created'}</Header>

        <Divider />

        <Message color="grey">
          <Grid columns={2} textAlign="left">
            <Grid.Column>
              <Header as="h2" className="center">Job Description</Header>
              <Grid.Row>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                  Duis vulputate commodo lectus, ac blandit elit tincidunt id.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla quam velit, vulputate eu pharetra nec,
                  mattis ac neque. Duis vulputate commodo lectus,
                  ac blandit elit tincidunt id.
                </p>
              </Grid.Row>
              <Grid.Row verticalAlign="bottom">
                <Divider hidden section />
                <Carousel>
                  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" alt="" />
                  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" alt="" />
                  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" alt="" />
                  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" alt="" />
                  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" alt="" />
                  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" alt="" />
                </Carousel>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <Image src="http://cdn.newsapi.com.au/image/v1/0a0ceda4bda18e664ffac1a8fa86a7d1" />
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
  const { listingForm } = state.listing;
  const { id } = state.auth.loggedInUser;
  return {
    id,
    listingForm,
  };
};
export default connect(mapStateToProps)(FullListing);
