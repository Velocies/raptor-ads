import { TOGGLE_NAVIGATION } from '../constants.js'

export const toggleNavigation = (link) =>
  ({
    type: TOGGLE_NAVIGATION,
    link
  })
