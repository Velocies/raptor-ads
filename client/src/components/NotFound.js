import React from 'react';
import { Link } from 'react-router';
import { Item, Statistic, Container } from 'semantic-ui-react';

const NotFound = () =>
  <Container textAlign="center">
    <Item.Group >
      <Item>
        <Item.Image
          as={Link}
          to="landing"
          size="small"
          src="/client/src/assets/full-raptor.png"
        />
        <Item.Content verticalAlign="middle">
          <Statistic
            size="big"
            color="blue"
            value="404"
            label="Not Found"
          />
          <Item.Description>
            <p>Sorry, we cannot find the page you are looking for.</p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </Container>;

export default NotFound;
