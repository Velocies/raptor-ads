export default (customer) => {
  if (customer.role === 'customer') {
    if (customer.lastName.length < 1) { return ''; }
    return `Ratings for ${customer.firstName} ${customer.lastName[0].toUpperCase()}.`;
  }
  return `Ratings for ${customer.business.companyName}`;
};
