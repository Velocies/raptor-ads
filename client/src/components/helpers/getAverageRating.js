export default (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  const total = arr.reduce((m, obj) => m + obj.stars, 0);
  return total / arr.length;
};
