const capitalize = (str) => {
  if (!str) { return ''; }
  const len = str.length;
  return len > 0 ? `${str[0].toUpperCase()}${str.slice(1)}` : '';
};

export default capitalize;
