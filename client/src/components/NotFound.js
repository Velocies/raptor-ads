import React from 'react';
import { Link } from 'react-router';
import { Item, Statistic, Container, Grid } from 'semantic-ui-react';

const NotFound = () =>
  <Container textAlign="center" className="notFound">
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
            value="404"
            label="Not Found"
          />
          <Item.Description>
            <p>Sorry, we cannot find the page you are looking for.</p>
          </Item.Description>
        </Item.Content>
      </Grid.Column>
    </Grid>
  </Container>;

export default NotFound;
