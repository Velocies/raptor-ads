import { addSignupFormError } from '../../actions';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateSignup = (data, dispatch) => {
  if (data.password !== data.passwordConfirmation) {
    dispatch(addSignupFormError('passwordMatch', 'Passwords must match'));
  }
  if (!emailRegex.test(data.email)) {
    dispatch(addSignupFormError('email', 'Email is invalid'));
  }
  if (data.firstName === '') {
    dispatch(addSignupFormError('firstName', 'First Name is required'));
  }
  if (data.lastName === '') {
    dispatch(addSignupFormError('lastName', 'Last Name is required'));
  }

  if (data.email === '') {
    dispatch(addSignupFormError('email', 'Email is required'));
  }
  if (data.password === '') {
    dispatch(addSignupFormError('password', 'Password is required'));
  }
  if (data.passwordConfirmation === '') {
    dispatch(addSignupFormError('passwordConfirmation', 'Password confirmation is required'));
  }
  if (data.businessName === '') {
    dispatch(addSignupFormError('businessName', 'Business name is required'));
  }
};
