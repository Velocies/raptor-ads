import React from 'react';
import { Grid, Item, Link, Statistic } from 'semantic-ui-react';

const LandingPage = () =>
  <div className="landingContainer">
    <Grid width={16}>
      <Grid.Column width={1} />
      <Grid.Column className="ui right aligned grid" width={4} >
        <Item.Image
          as={Link}
          to="landing"
          size="small"
          src="/client/src/assets/full-raptor.png"
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Item.Content verticalAlign="middle">
          <Statistic
            size="large"
            color="blue"
            value="Welcome to Raptor Ads"
          />
          <div className="landingText">Where the Professionals come to you</div>
        </Item.Content>
      </Grid.Column>
    </Grid>
  </div>;

export default LandingPage;
