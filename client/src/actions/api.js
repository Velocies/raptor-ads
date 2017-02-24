export const postUser = customer =>
  fetch('/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  });

export const postLogin = data =>
  fetch('api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export const postListing = payload =>
  fetch(`api/users/${payload.id}/listings`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload.data),
  });

export const deleteListing = listingId =>
  fetch(`api/listings/${listingId}`, {
    method: 'DELETE',
  });

export const getUserListings = id =>
  fetch(`api/users/${id}/listings`, {
    method: 'GET',
  });

export const getUserFromToken = token =>
  fetch(`api/token/${token}`, {
    method: 'GET',
  });
