import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Form, Grid, Icon, Header } from 'semantic-ui-react';
import { changeListingField, uploadListingImage, uploadListing, deleteImage, clearErrors } from '../../../actions/listingActions';
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
    const { title,
      body,
      images,
      image,
      type,
      address,
      city,
      state,
      zip,
    } = this.props.listingForm;
    const { onChange, onClick, formErrors } = this.props;
    return (
      <div>
        <Header color="green" textAlign="center"><Icon name="file text" />Add Listing</Header>
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
              {formErrors.image && <span className="formError">{formErrors.image}</span>}
              <Form.Field>
                <label htmlFor="address">Street Address</label>
                <input
                  name="address"
                  placeholder="Street Address"
                  value={address}
                  onChange={e => onChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="city">City</label>
                <input
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={e => onChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="state">State</label>
                <input
                  name="state"
                  placeholder="State"
                  value={state}
                  onChange={e => onChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  name="zip"
                  placeholder="Zipcode"
                  value={zip}
                  onChange={e => onChange(e)}
                />
              </Form.Field>
              <ListingImage
                onClick={onClick}
                onChange={onChange}
                image={image}
                getFormClass={this.getFormClass}
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
