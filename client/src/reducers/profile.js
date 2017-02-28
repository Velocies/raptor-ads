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
    case 'UPDATE_FORM_FIELD':
    console.log(action, "ACTIONS")
      return ({ ...state, profileForm: { ...state.profileForm, [action.field]: action.value } });
    default:
      return state;
  }
};
