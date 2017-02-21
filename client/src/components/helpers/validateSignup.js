export const validateSignup = (data, dispatch) => {
  if (data.password !== data.passwordConfirmation) {
    dispatch(addSignupformError('passwordConfirmation', 'passwords must match'));
  }
};
