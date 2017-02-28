export const updateFormField = (field, value) =>
  ({
    type: "UPDATE_FORM_FIELD",
    field,
    value,
  });

export const getCurrentProfile = user =>
  ({
    type: "GET_CURRENT_PROFILE",
    user,
  });