import { addListingFormError } from '../../actions';

const ZIP_REGEX = /^\d{5}(?:[-\s]\d{4})?$/

const validateListing = (data, dispatch) => {
  if (data.title.length === 0) {
    dispatch(addListingFormError('title', 'Title is a required field'));
  }
  if (data.body.length === 0) {
    dispatch(addListingFormError('body', 'Job Description is a required field'));
  }
  if (data.type.length === 0) {
    dispatch(addListingFormError('type', 'Job category is a required field'));
  }

  if (data.address.length === 0) {
    dispatch(addListingFormError('address', 'Street Address is a required field'));
  }

  if (data.city.length === 0) {
    dispatch(addListingFormError('city', 'City is a required field'));
  }

  if (data.state.length === 0) {
    dispatch(addListingFormError('state', 'State is a required field'));
  }

  if (data.zip.length === 0) {
    dispatch(addListingFormError('zipcode', 'Zipcode is a required field'));
  }

  if (!data.zip.match(ZIP_REGEX)) {
    dispatch(addListingFormError('zipcode', 'Please enter a valid zipcode'));
  }
};

export default validateListing;
