import { auth, initialState } from '../auth';
import * as actions from '../../actions';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(
      auth(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle toggleSignup', () => {
    const expectedState = {
      signupForm: {
        activeLink: 'customer',
        firstName: '',
        email: '',
        lastName: '',
        password: '',
        passwordConfirmation: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        companyName: '',
        companyAddress: '',
        companyCity: '',
        companyZip: '',
        companyState: '',
        license: '',
      },
      loginForm: {
        email: '',
        password: '',
      },
      formErrors: {
      },
      loggedInUser: {
        firstName: '',
        id: 0,
        business: {},
      },
    };

    const newState =
      auth(initialState, actions.toggleSignupLink('customer'));

    expect(newState).toEqual(expectedState);

    const changedLink =
      auth(expectedState, actions.toggleSignupLink('professional')).signupForm.activeLink;

    expect(changedLink).toEqual('professional');
  });

  it('should handle CHANGE_SIGNUP_FIELD', () => {
    const expectedState = {
      signupForm: {
        activeLink: 'customer',
        firstName: 'cory',
        email: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        companyName: '',
        companyAddress: '',
        companyCity: '',
        companyZip: '',
        companyState: '',
        license: '',
        password: '',
        passwordConfirmation: '',
      },
      loginForm: {
        email: '',
        password: '',
      },
      formErrors: {
      },
      loggedInUser: {
        firstName: '',
        id: 0,
        business: {},
      },
    };

    const newState =
      auth(initialState, actions.changeSignupField('firstName', 'cory'));

    expect(newState).toEqual(expectedState);
  });

  it('should handle ADD_SIGNUP_ERROR', () => {
    const expectedState = {
      signupForm: {
        activeLink: 'customer',
        firstName: '',
        email: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        companyName: '',
        companyAddress: '',
        companyCity: '',
        companyZip: '',
        companyState: '',
        license: '',
        password: '',
        passwordConfirmation: '',
      },
      formErrors: {'passwordMatch': 'passwords must match'},
      loginForm: {
        email: '',
        password: '',
      },
      loggedInUser: {
        firstName: '',
        id: 0,
        business: {},
      },
    };

    const newState =
      auth(initialState, actions.addSignupFormError('passwordMatch', 'passwords must match'));

    expect(newState).toEqual(expectedState);
  });

  it('should handle CLEAR_ERRORS', () => {
    const startingState = {
      signupForm: {
        activeLink: 'customer',
        firstName: '',
        email: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        password: '',
        companyName: '',
        companyAddress: '',
        companyCity: '',
        companyZip: '',
        companyState: '',
        license: '',
        passwordConfirmation: '',
      },
      formErrors: { passwordConfirmation: 'dont match' },
      loginForm: {
        email: '',
        password: '',
      },
      loggedInUser: {
        firstName: '',
        id: 0,
        business: {},
      },
    };

    const newState =
      auth(startingState, actions.clearErrors());

    expect(newState).toEqual(initialState);
  });
});
