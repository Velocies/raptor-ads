import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Card, Button, Divider, Loader, Grid, Menu, Dropdown } from 'semantic-ui-react';
import { getAllListings, changeSearchField, changeFilterCategory, changeDistanceRadius, changeSortFilter, clearClickedListing } from '../../../actions/allListingActions';
import { changeCenter, sortMarkersByDistance } from '../../../actions/googleMapActions';
import Listing from '../../shared/Listing';
import AllListingsSearch from './AllListingsComponents/AllListingsSearch';
import AllListingsFilter from './AllListingsComponents/AllListingsFilter';
import GoogleMapContainer from './AllListingsComponents/GoogleMap/GoogleMapContainer';
import filterListings from '../../helpers/filterListings';
import ListingInfoCard from './AllListingsComponents/ListingInfoCard';
// import InitialMap from './GoogleMap/GoogleMap';


class AllListings extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSelectFilter = this.onSelectFilter.bind(this);
    this.onSelectDistance = this.onSelectDistance.bind(this);
    this.onSelectSort = this.onSelectSort.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.allListings.length === 0) {
      this.props.dispatch(getAllListings());
    }
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(changeCenter(this.props.searchField));
  }

  onChange(e) {
    e.preventDefault();
    this.props.dispatch(changeSearchField(e.target.value));
    this.props.dispatch(sortMarkersByDistance(this.props.allListings));
  }

  onSelectFilter(e) {
    this.props.dispatch(changeFilterCategory(e));
  }

  onSelectDistance(e, data) {
    this.props.dispatch(changeDistanceRadius(data.value));
  }

  onSelectSort(e, data) {
    this.props.dispatch(changeSortFilter(data.value));
  }

  cutBody(body) {
    if (body.length > 20) {
      body = body.slice(0, 20) + '...';
    }
    return body;
  }

  componentWillUnmount() {
    this.props.dispatch(clearClickedListing());
  }

  render() {
    const { isFetching, allListings, cutBody, filters, clickedListing } = this.props;
    const distanceArray = [
      { key: 0, text: '10 Miles', value: 10 },
      { key: 1, text: '30 Miles', value: 30 },
      { key: 2, text: 'All', value: false},
    ];
    const sortArray = [
      { key: 0, text: 'Distance', value: 'distance' },
      { key: 1, text: 'Time Created', value: 'time' },
    ];
    //get all listings from state,
    //run taht thru this filter function,
    //then pass to google container
    const markers = filterListings(allListings, filters);
    console.log('MARKERS HERE', markers);
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
            onSelectSort={this.onSelectSort}
            sortArray={sortArray}
          />
          <Grid width={16} stackable>
            <Grid.Column width={8}>
              <GoogleMapContainer markers={markers}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <AllListingsSearch
                onClick={this.onClick}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
              />
              <ListingInfoCard card={clickedListing}/>
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
  const { allListings, isFetching, searchField, filters, clickedListing } = state.listings;
  const { id } = state.auth.loggedInUser;
  const loggedInUser = state.auth.loggedInUser;
  const { markers } = state.googleMap;
  return { allListings, isFetching, id, searchField, loggedInUser, markers, filters, clickedListing };
};

export default connect(mapStateToProps)(AllListings);