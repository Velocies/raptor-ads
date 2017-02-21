import { addSignupFormError } from '../../actions';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateSignup = (data, dispatch) => {
  console.log('false', emailRegex.test(data.email));
  if (data.password !== data.passwordConfirmation) {
    dispatch(addSignupFormError('passwordConfirmation', 'passwords must match'));
  } else if (!emailRegex.test(data.email)) {
    dispatch(addSignupFormError('email', 'email is invalid'));
  }
};
