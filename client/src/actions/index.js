import { TOGGLE_SIGNUP_FORM, CHANGE_SIGNUP_FIELD } from '../constants.js'

export const toggleSignupLink = (link) =>
  ({
    type: TOGGLE_SIGNUP_FORM,
    link
  })

export const changeSignupField = (field, value) =>
  ({
    type: CHANGE_SIGNUP_FIELD,
    field,
    value
  })
