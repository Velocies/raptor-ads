import { initialState, pagination } from '../';

describe('pagination reducer', () => {
  it('returns initial state for undefined action', () => {
    expect(pagination(undefined, {type: undefined})).toEqual(initialState);
  });
});
