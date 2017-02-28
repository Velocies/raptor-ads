export const updateFormField = (field, value) =>
  ({
    type: "UPDATE_FORM_FIELD",
    field,
    value,
  });