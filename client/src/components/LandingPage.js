import React from 'react';
import { Container, Grid, Item, Link, Statistic } from 'semantic-ui-react';

export const LandingPage = () => {
  return(
    <div className="landingContainer">
      <Grid width={16}>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Item.Image
            as={Link}
            to="landing"
            size="small"
            src="/client/src/assets/full-raptor.png"
          />
          <Item.Content verticalAlign="middle">
            <Statistic
              size="large"
              color="blue"
              value="Welcome to Raptor Ads"
            />
            <div className="landingText">Hello World</div>
            <Item.Description>
              <p>Sorry, we cannot find the page you are looking for.</p>
            </Item.Description>
          </Item.Content>
        </Grid.Column>
      </Grid>
    </div>
  )
}
