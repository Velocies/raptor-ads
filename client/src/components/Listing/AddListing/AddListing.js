import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Icon, Header } from 'semantic-ui-react';
import { changeListingField, uploadListingImage, uploadListing, deleteImage } from '../../../actions';
import { ListingTitle } from './AddListingComponents/ListingTitle';
import ListingImage from './AddListingComponents/ListingImage';
import ListingJobTypes from './AddListingComponents/ListingJobTypes';
import ListingBody from './AddListingComponents/ListingBody';
import ListingDisplayImages from './AddListingComponents/ListingDisplayImages';


class AddListing extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.props.listingForm;
    const id = this.props.id;
    const payload = { data, id };
    console.log('here', payload)
    this.props.dispatch(uploadListing(payload));
  }

  handleDelete(index) {
    this.props.dispatch(deleteImage(index));
  }

  render() {
    const { title, body, images, image, type } = this.props.listingForm;
    const { onChange, onClick } = this.props;
    return (
      <div>
        <Header textAlign="center"><Icon name="file text" />Add Listing</Header>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            <Form onSubmit={e => this.onSubmit(e)}>
              <ListingTitle title={title} onChange={onChange} />
              <ListingJobTypes type={type} onChange={onChange} />
              <ListingBody body={body} onChange={onChange} />
              <ListingImage
                images={images}
                onClick={onClick}
                onChange={onChange}
                image={image}
              />
              <Form.Button className="ui center aligned grid" >Submit</Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
        <ListingDisplayImages images={images} handleDelete={this.handleDelete} />
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

const mapDispatchToProps = dispatch =>
  ({
    onChange: (e, data) => {
      if (data) {
        dispatch(changeListingField('type', data.value));
      } else {
        dispatch(changeListingField(e.target.name, e.target.value));
      }
    },
    onClick: (image) => {
      dispatch(uploadListingImage(image));
      dispatch(changeListingField('image', ''));
    },
    dispatch,
  });

AddListing.propTypes = {
  listingForm: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    images: React.PropTypes.array.isRequired,
    type: React.PropTypes.string.isRequired,
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
