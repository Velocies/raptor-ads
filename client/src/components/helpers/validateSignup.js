import { addSignupFormError } from '../../actions';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateSignup = (data, dispatch) => {
  if (data.password !== data.passwordConfirmation) {
    dispatch(addSignupFormError('passwordMatch', 'passwords must match'));
  }
  if (!emailRegex.test(data.email)) {
    dispatch(addSignupFormError('email', 'email is invalid'));
  }
  if (data.firstName === '') {
    dispatch(addSignupFormError('firstName', 'First Name cant be blank'));
  }
  if (data.lastName === '') {
    dispatch(addSignupFormError('lastName', 'Last Name cant be blank'));
  }

  if (data.email === '') {
    dispatch(addSignupFormError('email', 'Email is required'));
  }
  if (data.password === '') {
    dispatch(addSignupFormError('password', 'Password is required'));
  }
  if (data.passwordConfirmation === '') {
    dispatch(addSignupFormError('passwordConfirmation', 'Password confirmation cant be blank'));
  }
  if (data.firstName === '') {
    dispatch(addSignupFormError('firstName', 'First Name cant be blank'));
  }
};
