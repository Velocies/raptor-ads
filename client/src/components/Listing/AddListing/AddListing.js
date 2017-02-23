import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Icon, Header } from 'semantic-ui-react';
import { changeListingField, uploadListingImage } from '../../../actions';
import { ListingTitle } from './AddListingComponents/ListingTitle';
import ListingImage from './AddListingComponents/ListingImage';
import { ListingJobTypes } from './AddListingComponents/ListingJobTypes';
import { ListingBody } from './AddListingComponents/ListingBody';
import ListingDisplayImages from './AddListingComponents/ListingDisplayImages';

class AddListing extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.props.dispatch(changeListingField(e.target.name, e.target.value));
  }

  onClick() {
    this.props.dispatch(uploadListingImage(this.props.listingForm.image));
    this.props.dispatch(changeListingField('image', ''));
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.props.listingForm;
    console.log('SUBMIT', data);
  }

  render() {
    const { title, body, images, image, jobCategory } = this.props.listingForm;
    return (
      <div>
        <Header textAlign="center"><Icon name="file text" />Add Listing</Header>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            <Form onSubmit={e => this.onSubmit(e)}>
              <ListingTitle title={title} onChange={this.onChange} />
              <ListingJobTypes jobCategory={jobCategory} onChange={this.onChange} />
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
  return {
    listingForm,
  };
};

AddListing.propTypes = {
  listingForm: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    images: React.PropTypes.array.isRequired,
    jobCategory: React.PropTypes.string.isRequired,
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(AddListing);
