export default (array, itemsPerPage) => {
  if (!array.length) { return 0; }
  return Math.ceil(array.length/itemsPerPage);
};
