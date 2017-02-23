import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Icon, Header } from 'semantic-ui-react';
import { changeListingField, uploadListingImage, uploadListing } from '../../../actions';
import { ListingTitle } from './AddListingComponents/ListingTitle';
import ListingImage from './AddListingComponents/ListingImage';
import ListingJobTypes from './AddListingComponents/ListingJobTypes';
import { ListingBody } from './AddListingComponents/ListingBody';
import ListingDisplayImages from './AddListingComponents/ListingDisplayImages';


class AddListing extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e, data) {
    if (data) {
      this.props.dispatch(changeListingField('type', data.value));
    } else {
      this.props.dispatch(changeListingField(e.target.name, e.target.value));
    }
  }

  onClick() {
    if (this.props.listingForm.images.length < 4) {
      this.props.dispatch(uploadListingImage(this.props.listingForm.image));
    }
    this.props.dispatch(changeListingField('image', ''));
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.props.listingForm;
    const id = this.props.id;
    const payload = { data, id };
    this.props.dispatch(uploadListing(payload));
  }

  render() {
    const { title, body, images, image, type } = this.props.listingForm;
    return (
      <div>
        <Header textAlign="center"><Icon name="file text" />Add Listing</Header>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            <Form onSubmit={e => this.onSubmit(e)}>
              <ListingTitle title={title} onChange={this.onChange} />
              <ListingJobTypes type={type} onChange={this.onChange} />
              <ListingBody body={body} onChange={this.onChange} />
              <ListingImage
                images={images}
                onClick={this.onClick}
                onChange={this.onChange}
                image={image}
              />
              <Form.Button className="ui center aligned grid" >Submit</Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
        <ListingDisplayImages images={images} />
      </div>
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

AddListing.propTypes = {
  listingForm: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    images: React.PropTypes.array.isRequired,
  }).isRequired,
  id: React.PropTypes.number.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(AddListing);
