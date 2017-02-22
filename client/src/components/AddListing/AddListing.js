import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Icon, Header } from 'semantic-ui-react';
import { changeListingField } from '../../actions';
import { ListingTitle } from './AddListingComponents/ListingTitle';
import { ListingImages } from './AddListingComponents/ListingImages';
import { ListingJobTypes } from './AddListingComponents/ListingJobTypes';
import { ListingBody } from './AddListingComponents/ListingBody';

class AddListing extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.dispatch(changeListingField(e.target.name, e.target.value));
  }

  onClick() {
    console.log('clicked');
  }

  render() {
    const { title, body, images } = this.props.listingForm;
    return (
      <div>
        <Header textAlign="center"><Icon name="file text" />Add Listing</Header>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            <Form >
              <ListingTitle title={title} onChange={this.onChange} />
              <ListingJobTypes />
              <ListingBody body={body} onChange={this.onChange} />
              <ListingImages images={images} onClick={this.onClick} />
              <Form.Button className="ui center aligned grid" >Submit</Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { listingForm } = state.listing;
  return {
    listingForm,
  };
};

// AddListing.propTypes = {

// };

export default connect(mapStateToProps)(AddListing);
