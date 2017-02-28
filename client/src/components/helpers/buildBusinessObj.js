export default (customer) => {
  const result = {
    firstName,
    email,
    lastName,
    password,
    passwordConfirmation,
  } = customer

  result.business = {
    companyName,
    companyAddress,
    companyCity,
    companyZip,
    companyState,
    license,
  } = customer;

  console.log('result', result);

  return result;
};
