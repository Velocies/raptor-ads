import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Form, Grid, Icon, Header } from 'semantic-ui-react';
import { changeListingField, uploadListingImage, uploadListing, deleteImage, clearErrors } from '../../../actions';
import ListingTitle from './AddListingComponents/ListingTitle';
import ListingImage from './AddListingComponents/ListingImage';
import ListingJobTypes from './AddListingComponents/ListingJobTypes';
import ListingBody from './AddListingComponents/ListingBody';
import ListingDisplayImages from './AddListingComponents/ListingDisplayImages';


class AddListing extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getFormClass = this.getFormClass.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.props.listingForm;
    const id = this.props.id;
    const payload = { data, id };
    this.props.dispatch(clearErrors());
    this.props.dispatch(uploadListing(payload));
  }

  handleDelete(index) {
    this.props.dispatch(deleteImage(index));
  }

  getFormClass(name) {
    return classnames({ fieldInvalid: this.props.formErrors[name] });
  }

  render() {
    const { title, body, images, image, type } = this.props.listingForm;
    const { onChange, onClick, formErrors } = this.props;
    return (
      <div>
        <Header textAlign="center"><Icon name="file text" />Add Listing</Header>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            {formErrors.title && <span className="formError">{formErrors.title}</span>}
            <Form onSubmit={e => this.onSubmit(e)}>
              <ListingTitle
                title={title}
                onChange={onChange}
                getFormClass={this.getFormClass}
              />
              {formErrors.type && <span className="formError">{formErrors.type}</span>}
              <ListingJobTypes type={type} onChange={onChange} getFormClass={this.getFormClass} />
              {formErrors.body && <span className="formError">{formErrors.body}</span>}
              <ListingBody
                body={body}
                onChange={onChange}
                getFormClass={this.getFormClass}
              />
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
  const { listingForm, formErrors } = state.listing;
  const { id } = state.auth.loggedInUser;
  return {
    id,
    listingForm,
    formErrors,
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
      const imageObj = { img_path: image };
      dispatch(uploadListingImage(imageObj));
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
