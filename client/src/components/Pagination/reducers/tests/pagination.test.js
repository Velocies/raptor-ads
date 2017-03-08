import { initialState, pagination } from '../';
import { CHANGE_ACTIVEITEM } from '../../actions';

describe('pagination reducer', () => {
  it('returns initial state for undefined action', () => {
    expect(pagination(undefined, {type: undefined})).toEqual(initialState);
  });
  it('changes activeItem on CHANGE_ACTIVEITEM', () => {
    expect(pagination(initialState, {type: CHANGE_ACTIVEITEM, itemNumber: 2 })).toEqual({ activeItem: 2 });
  });
});
