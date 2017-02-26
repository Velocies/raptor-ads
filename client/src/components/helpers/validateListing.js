import { addListingFormError } from '../../actions';

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
};

export default validateListing;
