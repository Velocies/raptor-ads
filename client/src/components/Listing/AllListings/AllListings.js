import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider, Loader, Grid, Menu, Dropdown } from 'semantic-ui-react';
import { getAllListings, changeSearchField, changeFilterCategory, changeDistanceRadius } from '../../../actions/allListingActions';
import { changeCenter, sortMarkersByDistance } from '../../../actions/googleMapActions';
import Listing from '../../shared/Listing';
import AllListingsSearch from './AllListingsComponents/AllListingsSearch';
import AllListingsFilter from './AllListingsComponents/AllListingsFilter';
import GoogleMapContainer from './AllListingsComponents/GoogleMap/GoogleMapContainer';
import filterListings from '../../helpers/filterListings';
// import InitialMap from './GoogleMap/GoogleMap';


class AllListings extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelectFilter = this.onSelectFilter.bind(this);
    this.onSelectDistance = this.onSelectDistance.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getAllListings());
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  onClick() {
    this.props.dispatch(changeCenter(this.props.searchField));
      // console.log('computeDistanceBetween', computeDistanceBetween)
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
    this.props.dispatch(sortMarkersByDistance(this.props.allListings));
  }

  onSelectFilter(e) {
    this.props.dispatch(changeFilterCategory(e));
  }

  onSelectDistance(e, data) {
    this.props.dispatch(changeDistanceRadius(data.value));
  }

  cutBody(body) {
    if (body.length > 20) {
      body = body.slice(0, 20) + '...';
    }
    return body;
  }

  render() {
    const { isFetching, allListings, cutBody, filters } = this.props;
    const distanceArray = [
      { key: 0, text: '10 Miles', value: 10 },
      { key: 1, text: '30 Miles', value: 30 },
      { key: 2, text: 'All', value: 0},
    ];
    const sortArray = [
      { key: 0, text: 'Distance', value: 'distance' },
      { key: 1, text: 'Time Created', value: 'time' },
    ];
    //get all listings from state,
    //run taht thru this filter function,
    //then pass to google container
    const markers = filterListings(allListings, filters);
    if (isFetching) {
      return <Loader active inline='centered' />;
    } else {
      return (
        <Container textAlign="center">
          <AllListingsFilter
            filters={filters}
            onSelect={this.onSelect}
            distanceArray={distanceArray}
            onSelectFilter={this.onSelectFilter}
            onSelectDistance={this.onSelectDistance}

          />
          <Grid width={16}>
            <Grid.Column width={8}>
              <GoogleMapContainer markers={markers}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <AllListingsSearch onClick={this.onClick} onChange={this.onChange}/>
            </Grid.Column>
          </Grid>
          <h3>Listings</h3>
          <Divider />
          <Card.Group itemsPerRow={4} stackable>
            {markers && markers.map(listing =>
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
  const { allListings, isFetching, searchField, filters } = state.listings;
  const { id } = state.auth.loggedInUser;
  const loggedInUser = state.auth.loggedInUser;
  const { markers } = state.googleMap;
  return { allListings, isFetching, id, searchField, loggedInUser, markers, filters };
};

export default connect(mapStateToProps)(AllListings);