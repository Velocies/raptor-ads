import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider, Loader, Grid } from 'semantic-ui-react';
import { getAllListings, changeSearchField } from '../../../actions/allListingActions';
import { changeCenter } from '../../../actions/googleMapActions';
import Listing from '../../shared/Listing';
import AllListingsFilter from './AllListingsComponents/AllListingsFilter';
import GoogleMapContainer from './AllListingsComponents/GoogleMap/GoogleMapContainer';
// import InitialMap from './GoogleMap/GoogleMap';


class AllListings extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getAllListings());
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  onClick() {
    console.log('clicked')
    var geo = new google.maps.Geocoder();
    geo.geocode({ 'address': this.props.searchField }, (results, status) => {
      const bounds = results[0].geometry.bounds;
      const newCenter = {
        lat: bounds.f.f,
        lng: bounds.b.b,
      };
      console.log('newCenter', newCenter);
      this.props.dispatch(changeCenter(newCenter));
      console.log('computeDistanceBetween', computeDistanceBetween)
    });
    // this.geocoder.geocode({ 'address': '1012 docday court, Folsom, Ca, United States' }, function handleResults(results, status) {

    //   const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    //   console.log('restuls', results[0])
    //   const newThing = {
    //     position: results[0].geometry.location,
    //     defaultAnimation: 2,
    //     key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
    //   };
    //   nextMarkers.push(newThing);
    //   this.setState({
    //     markers: nextMarkers,
    //   });
    //   console.log('markers', this.state.markers);
    //   console.log('results', results, status);
    // }.bind(this));
  }

  onChange(e) {
    this.props.dispatch(changeSearchField(e.target.value));
  }



  cutBody(body) {
    if (body.length > 20) {
      body = body.slice(0, 20) + '...';
    }
    return body;
  }

  render() {
    const { isFetching, allListings, cutBody } = this.props;
    if (isFetching) {
      return <Loader active inline='centered' />;
    } else {
      return (
        <Container textAlign="center">
          <Grid width={16}>
            <Grid.Column width={8}>
              <GoogleMapContainer />
            </Grid.Column>
            <Grid.Column width={8}>
              <AllListingsFilter onClick={this.onClick} onChange={this.onChange}/>
            </Grid.Column>
          </Grid>
          <h3>Listings</h3>
          <Divider />
          <Card.Group itemsPerRow={4} stackable>
            {allListings && allListings.map(listing =>
              <Listing
                key={listing.id}
                listingId={listing.id}
                title={listing.title}
                createdAt={this.convertTime(listing.createdAt)}
                body={listing.body}
                type={listing.type}
                onClick={this.onClick}
                handleDelete={this.handleDelete}
                cutBody={this.cutBody}
              />
            )}
          </Card.Group>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const { allListings, isFetching, searchField } = state.listings;
  const { id } = state.auth.loggedInUser;
  return { allListings, isFetching, id, searchField };
};

export default connect(mapStateToProps)(AllListings);