import React from 'react';
import { Link } from 'react-router';
import { Item, Statistic, Container, Grid, Divider, Image } from 'semantic-ui-react';

const About = () =>
  <Container textAlign="center" className="about">
    <Grid columns={1} width={16}>
      <Grid.Column width={16}>
        <Grid.Row>
          <Item.Image
            as={Link}
            to="landing"
            size="small"
            src="/client/src/assets/full-raptor.png"
          />
          <Item.Content verticalAlign="center">
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
                size="small"
                src="https://media.licdn.com/media/AAEAAQAAAAAAAASfAAAAJDk4NzA1MjE0LTMwNWMtNDVlZC1hNWE3LWI1YzFjMzI1NmI2Yg.jpg"
              />
              <Item.Content>
                <Statistic
                  size="tiny"
                  color="green"
                  value="Jimmie Gisclair"
                />
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                size="small"
                src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnIAAAAJDQ5ZGQ2MmQyLThjYWItNDYyYi1iNzQ5LWQzYTc0ZGM1OGFiYQ.jpg"
              />
              <Item.Content>
                <Statistic
                  size="tiny"
                  color="green"
                  value="Cory Wolnewitz"
                />
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                size="small"
                src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAtOAAAAJDU5MTQ2MjFkLTU2NGYtNDg0Yi1iYjA1LWUyNjcxZWQyOThhYw.jpg"
              />
              <Item.Content>
                <Statistic
                  size="tiny"
                  color="green"
                  value="Bobby Phan"
                />
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                size="small"
                src="https://i.gyazo.com/e6894fc283b7d1f8dda70737ccde1203.png"
              />
              <Item.Content>
                <Statistic
                  size="tiny"
                  color="green"
                  value="Tyler Mackay"
                />
              </Item.Content>
            </Item>
            <Divider />
          </Item.Group>
        </Grid.Row>

        <Divider section hidden />

        <Grid.Row>
          <Item.Content>
            <Statistic
              size="large"
              color="blue"
              value="TECH STACK"
            />
          </Item.Content>
          <Divider hidden />
          <Image.Group size="medium">
            <Image src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" />
            <Image src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png" />
            <Image src="https://www.computersnyou.com/wp-content/uploads/2014/12/postgresql-logo.png" />
            <Image src="http://techforgeek.com/wp-content/uploads/2015/01/nodejs-logo.png" />
            <Image src="http://www.userlogos.org/files/logos/3_gumanov/google_maps1.png?1445141432" />
            <Image src="https://s-media-cache-ak0.pinimg.com/originals/27/e2/f8/27e2f81f0b20c79a2b6dd093f06062d1.png" />
            <Image shape="rounded" src="http://i.imgur.com/twi3WOn.png" />
          </Image.Group>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Container>;

export default About;
