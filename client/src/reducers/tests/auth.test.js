import { auth } from '../auth'
import { initialState } from '../auth'
import * as actions from '../../actions'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(
      auth(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle toggleSignup', () => {
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
      auth(initialState, actions.toggleSignupLink('customer'))
    ).
    toEqual(expectedState)

    const changedLink =
      auth(expectedState, actions.toggleSignupLink('professional')).signupForm.activeLink

    expect(changedLink).toEqual('professional')
  })

  it('should handle CHANGE_SIGNUP_FIELD', () => {
    const expectedState = {
      signupForm: {
        activeLink: 'customer',
        firstName: 'cory',
        email: '',
        lastName: '',
        password: '',
        passwordConfirmation: ''
      }
    }

    const newState =
      auth(initialState, actions.changeSignupField('firstName', 'cory'));

    expect(newState).toEqual(expectedState)
  })
})
