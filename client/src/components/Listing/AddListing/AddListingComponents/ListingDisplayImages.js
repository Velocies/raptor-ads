import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import ListingDisplayImage from './ListingDisplayImage';

const ListingDisplayImages = ({ images }) => {
  return (
    <Grid width={16}>
      <Grid.Column width={5} />
      <Grid.Column width={6}>
        <div>
          {images.map((currentImage, index) =>
            <ListingDisplayImage image={currentImage} key={index} />)}
        </div>
      </Grid.Column>
    </Grid>
  );
};

ListingDisplayImages.propTypes = {
  images: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ListingDisplayImages;
