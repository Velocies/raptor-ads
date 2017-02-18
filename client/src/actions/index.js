import { TOGGLE_SIGNUP } from '../constants.js'

export const toggleSignup = (link) =>
  ({
    type: TOGGLE_SIGNUP,
    link
  })
