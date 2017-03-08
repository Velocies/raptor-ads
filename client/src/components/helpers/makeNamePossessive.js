const makeNamePossessive = (firstName) => {
  if (firstName[firstName.length - 1] !== 's') {
    return firstName + "'s";
  } else {
    return firstName + "'";
  }
};

export default makeNamePossessive;
