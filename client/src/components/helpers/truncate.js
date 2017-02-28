const truncate = body => (
  body.length > 20 ? `${body.slice(0, 20)}...` : body
);

export default truncate;
