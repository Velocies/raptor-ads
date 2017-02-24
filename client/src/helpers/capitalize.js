export const capitalize = (str) => {
  if (str !== undefined) {
    return str[0].toUpperCase() + str.slice(1);
  }
};
