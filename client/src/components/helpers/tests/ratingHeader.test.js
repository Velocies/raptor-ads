import ratingsHeader from '../ratingsHeader';

const customer = {
  firstName: 'Cory',
  lastName: 'Wolnewitz',
  role: 'customer',
  business: {
    companyName: 'Cors Corn',
  },
};

const pro = {
  firstName: 'Cory',
  lastName: 'Wolnewitz',
  role: 'professional',
  business: {
    companyName: 'Cors Corn',
  },
};

test('renders header', () => {
  expect(ratingsHeader(customer)).toEqual('Ratings for Cory W.');
  expect(ratingsHeader(pro)).toEqual('Ratings for Cors Corn');
});
