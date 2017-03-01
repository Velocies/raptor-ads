export default (customer) => {
  const {
    firstName,
    email,
    lastName,
    password,
    passwordConfirmation,
    address,
    city,
    state,
    zip,
    companyName,
    companyAddress,
    companyCity,
    companyZip,
    companyState,
    license,
  } = customer;

  if (customer.role === 'customer') {
    const result = {
      firstName,
      email,
      lastName,
      address,
      state,
      city,
      zip,
      password,
      passwordConfirmation,
    };
    return result;
  }

  const result = {
    firstName,
    email,
    lastName,
    password,
    passwordConfirmation,
  };

  result.business = {
    companyName,
    companyAddress,
    companyCity,
    companyZip,
    companyState,
    license,
  };

  return result;
};
