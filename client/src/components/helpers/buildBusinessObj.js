export default (customer) => {
  const {
    firstName,
    email,
    lastName,
    password,
    passwordConfirmation,
    companyName,
    companyAddress,
    companyCity,
    companyZip,
    companyState,
    license,
  } = customer;

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
