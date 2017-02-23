import { capitalize } from '../capitalize'

test('It capitalizes first letter in string', () => {
  expect(capitalize('cory')).toEqual('Cory');
});
