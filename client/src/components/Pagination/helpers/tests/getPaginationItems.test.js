import getPaginationItems from '../getPaginationItems';

test('getPaginationItems works as expected', () => {
  expect(getPaginationItems([], 9)).toBe(0);
  expect(getPaginationItems([1,2,3], 9)).toBe(1);
  expect(getPaginationItems([1,2,3,4,5], 3)).toBe(2);
});
