export default (arr) => {
  const total = arr.reduce((m, obj) => m + obj.stars, 0);
  return total / arr.length;
};
