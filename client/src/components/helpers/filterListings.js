const filterListings = (listings, filter) => {
  console.log('filter THE LISTINGS HERE')
  let filteredListings = [...listings];
  if (listings.length !== 0) {
    if (filter.distance) {
      if (filter.distance === 30) {
        filteredListings = filteredListings.filter((listing) => {
          if (listing.distanceFromCenter < 30 * 3791) {
            return listing;
          }
        });
      } else if (filter.distance === 10) {
        filteredListings = filteredListings.filter((listing) => {
          if (listing.distanceFromCenter < 10 * 3791) {
            return listing;
          }
        });
      }
    }
    if (filter.categories.Technology === true) {
      filteredListings = filteredListings.filter((listing) => {
        if (listing.type === 'technology') {
          return listing;
        }
      });
    }
    if (filter.categories['Home Improvement'] === true) {
      filteredListings = filteredListings.filter((listing) => {
        if (listing.type === 'home improvement') {
          return listing;
        }
      });
    }
    if (filter.sort === 'distance') {
      filteredListings.sort((a, b) => a.distanceFromCenter - b.distanceFromCenter);
    } else if (filter.sort === 'time') {
      filteredListings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }
  return filteredListings;
};

export default filterListings;
