import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import ListingDeleteModal from './ListingDeleteModal';

const getIconString = str => (
  str === 'home improvement' ? 'home' : 'laptop'
);

const Listing = ({ userId, listingId, title, createdAt, body, type, handleDelete, pathname }) =>
  <Card centered raised>
    <Card.Content>
      {
        pathname === '/dashboard' ?
          <ListingDeleteModal
            handleDelete={handleDelete}
            userId={userId}
            listingId={listingId}
          /> : null
      }
      <Image floated="right">
        <Icon name={getIconString(type)} size="big" />
      </Image>
      <Card.Header>
        { title }
      </Card.Header>
      <Card.Meta>
        { createdAt }
      </Card.Meta>
      <Card.Description>
        { body }
      </Card.Description>
    </Card.Content>
  </Card>;import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider, Loader } from 'semantic-ui-react';
import { getAllListings } from '../../../actions/allListingActions';
import Listing from '../../shared/Listing';
import AllListingsFilter from './AllListingsComponents/AllListingsFilter';
import InitialMap from './GoogleMap/GoogleMap';


class AllListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 25,
          lng: 12,
        }
      }],
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getAllListings());
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  onClick(e) {
    console.log('clicked', e.target.innerHTML);
  }

  render() {
    const { isFetching, allListings, pathname } = this.props;
    console.log('STATE OF ARRAY', allListings);
    if (isFetching) {
      return <Loader active inline='centered' />;
    } else {
      return (
        <Container textAlign="center">
          <div style={{height: '100%'}}>
            <InitialMap
              containerElement={<div style={{ height: '100%'}} />}
              mapElement={<div style={{ height: '100%'}} />}
              markers={this.state.markers} />
          </div>
          <AllListingsFilter onClick={this.onClick} />
          <h3 onClick={() => this.onClick()}>Listings</h3>
          <Divider />
          <Card.Group itemsPerRow={4} stackable>
            {allListings && allListings.map(listing =>
              <Listing
                key={listing.id}
                id={listing.id}
                title={listing.title}
                createdAt={this.convertTime(listing.createdAt)}
                body={listing.body}
                type={listing.type}
                onClick={this.onClick}
                handleDelete={this.handleDelete}
                pathname={pathname}
              />
            )}
          </Card.Group>
        </Container>
      );
    }

Listing.propTypes = {
  title: React.PropTypes.string.isRequired,
  createdAt: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  userId: React.PropTypes.number,
  listingId: React.PropTypes.number.isRequired,
  handleDelete: React.PropTypes.func,
  pathname: React.PropTypes.string.isRequired,
};

export default Listing;
