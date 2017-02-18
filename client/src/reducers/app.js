export const initialState = {
  user: {name: "Cory", email: "wolnewitz@gmail.com"}
}

export const app = (state=initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
