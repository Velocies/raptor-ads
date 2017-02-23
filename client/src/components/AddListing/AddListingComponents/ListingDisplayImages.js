import React from 'react';
import { Form, Grid, Image } from 'semantic-ui-react';

export const ListingDisplayImages = ({ images }) => {
  return (
    <Grid width={16}>
      <Grid.Column width={5} />
      <Grid.Column width={6}>
        <div>
          {images.map((currentImage) => <Image src={currentImage} size='small' wrapped />)}
        </div>
      </Grid.Column>
    </Grid>
  );
};