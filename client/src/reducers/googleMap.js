export const initialState = {
  center: { lat: 33, lng: 131.044922 },
  markers: [],
}

export const googleMap = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};