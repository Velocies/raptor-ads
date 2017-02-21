import { addSignupFormError } from '../../actions';

export const validateSignup = (data, dispatch) => {
  if (data.password !== data.passwordConfirmation) {
    dispatch(addSignupFormError('passwordConfirmation', 'passwords must match'));
  }
};
