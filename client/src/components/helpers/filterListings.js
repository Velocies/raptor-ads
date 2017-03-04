const filterListings = (listings, filter) => {
  let filteredListings = [...listings];
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
  console.log('FILTER CATEGORIES', filter.categories['Home Improvement'])
  if (filter.categories.Technology === true) {
    console.log('IN HERE IN technology')
    filteredListings = filteredListings.filter((listing) => {
      if (listing.type === 'technology') {
        return listing;
      }
    });
  }
  if (filter.categories['Home Improvement'] === true) {
    filteredListings = filteredListings.filter((listing) => {
      console.log('IN HERE IN HOME improvement')
      if (listing.type === 'home improvement') {
        return listing;
      }
    });
  }
  return filteredListings;
};

export default filterListings;
