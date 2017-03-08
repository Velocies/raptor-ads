import { LOGIN_SUCCESS, UPDATE_FORM_FIELD, GET_CURRENT_PROFILE, UPDATE_PROFILE_SUCCESS, CHANGE_DISPLAY, GET_USER_PROFILE_LISTINGS_SUCCESS } from '../constants';
const initialState = {
  profileForm: {
    firstName: '',
    lastName: '',
    email: '',
    business: {},
    address: '',
    city: '',
    zip: '',
    state: '',
    role: 'customer',
    profileUpdated: false,
  },
  display: 'dashboard',
  profileUserListings: [],
};
export const profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PROFILE:
      return ({ ...state, profileForm: { ...state.profileForm, ...action.user } });
    case UPDATE_FORM_FIELD:
      return ({ ...state,
        profileForm:
        { ...state.profileForm, [action.field]: action.value,
          profileUpdated: false } });
    case LOGIN_SUCCESS:
      return ({ ...state, profileForm: { ...state.profileForm, ...action.data.user } });
    case UPDATE_PROFILE_SUCCESS:
      return ({ ...state, profileForm: { ...state.profileForm, ...action.data, profileUpdated: true } });
    case CHANGE_DISPLAY:
      return ({ ...state, display: action.route });
    case GET_USER_PROFILE_LISTINGS_SUCCESS:
      return ({ ...state, profileUserListings: action.listings });
    default:
      return state;
  }
};
