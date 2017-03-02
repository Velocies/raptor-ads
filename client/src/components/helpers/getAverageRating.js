export default (arr) => {
  const total = arr.ratings.reduce((m, obj) => m + obj.stars);
  return total/arr.ratings.length;
}
