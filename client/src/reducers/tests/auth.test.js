import { auth } from '../auth'
import { initialState } from '../auth'
import * as types from '../../actions'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(
      auth(undefined, {})
    ).toEqual(initialState)
  })
  it('should handle TOGGLE_SIGNUP_FORM', () => {
    const expectedState = {
      signupForm: {
        activeLink: 'customer',
        firstName: '',
        email: '',
        lastName: '',
        password: '',
        passwordConfirmation: ''
      }
    }

    expect(
      auth(initialState, {type: types.TOGGLE_SIGNUP_FORM, link: 'customer'})
    ).toEqual(expectedState)
  })
})
