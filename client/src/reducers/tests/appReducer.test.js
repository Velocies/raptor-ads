import { app } from '../app'
import { initialState } from '../app'

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(
      app(undefined, {})
    ).toEqual(initialState)
  })
})
