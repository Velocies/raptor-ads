export const initialState = {
  listingForm: {
    title: '',
    body: '',
    tags: [],
    images: [],
  },
};

export const listing = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};