import { LOGIN_SUCCESS } from '../constants';
const initialState = {
  profileForm: {
    firstName: '',
    email: '',
    lastName: '',
    businessName: '',
  },
};
export const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRENT_PROFILE':
    console.log("ACTIONS", action);
      return ({ ...state, profileForm: { ...state.profileForm, ...action.user } });
    case 'UPDATE_FORM_FIELD':
      return ({ ...state, profileForm: { ...state.profileForm, [action.field]: action.value } });
    case LOGIN_SUCCESS:
      return ({ ...state, profileForm: { ...state.profileForm, ...action.data.user } });
    default:
      return state;
  }
};
