import { TOGGLE_SIGNUP_FORM } from '../constants.js'

export const toggleSignupLink = (link) =>
  ({
    type: TOGGLE_SIGNUP_FORM,
    link
  })
