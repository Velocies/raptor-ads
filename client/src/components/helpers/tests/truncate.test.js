import truncate from '../truncate';

const testString = 'Bobby really likes spaghetti and ravioli';
const expected = 'Bobby really likes s...';

test('truncates the text on the 20th character', () => {
  expect(truncate(testString)).toEqual(expected);
});
