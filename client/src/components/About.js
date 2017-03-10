import React from 'react';
import { Link } from 'react-router';
import { Item, Statistic, Container, Grid, Divider, Image } from 'semantic-ui-react';

const About = () =>
  <Container textAlign="center" className="about">
    <Grid columns={1}>
      <Grid.Column>
        <Grid.Row>
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
              value="MEET THE TEAM"
            />
          </Item.Content>
        </Grid.Row>

        <Divider />

        <Grid.Row>
          <Item.Group divided>
            <Item>
              <Item.Image
                verticalAlign="center"
                spaced
                size="medium"
                src="https://media.licdn.com/media/AAEAAQAAAAAAAASfAAAAJDk4NzA1MjE0LTMwNWMtNDVlZC1hNWE3LWI1YzFjMzI1NmI2Yg.jpg"
              />
              <Item.Content verticalAlign="center">
                <Statistic
                  size="small"
                  color="green"
                  value="Jimmie Gisclair"
                />
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                verticalAlign="center"
                spaced
                size="medium"
                src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnIAAAAJDQ5ZGQ2MmQyLThjYWItNDYyYi1iNzQ5LWQzYTc0ZGM1OGFiYQ.jpg"
              />
              <Item.Content verticalAlign="center">
                <Statistic
                  size="small"
                  color="green"
                  value="Cory Wolnewitz"
                />
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                verticalAlign="center"
                spaced
                size="medium"
                src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAtOAAAAJDU5MTQ2MjFkLTU2NGYtNDg0Yi1iYjA1LWUyNjcxZWQyOThhYw.jpg"
              />
              <Item.Content verticalAlign="center">
                <Statistic
                  size="small"
                  color="green"
                  value="Bobby Phan"
                />
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                verticalAlign="center"
                spaced
                size="medium"
                src="https://i.gyazo.com/e6894fc283b7d1f8dda70737ccde1203.png"
              />
              <Item.Content verticalAlign="center">
                <Statistic
                  size="small"
                  color="green"
                  value="Tyler Mackay"
                />
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Container>;

export default About;
