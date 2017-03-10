import React from 'react';
import { Link } from 'react-router';
import { Item, Statistic, Container, Grid, Divider, Image, Card } from 'semantic-ui-react';

const About = () =>
  <Container textAlign="center" className="about" fluid>
    <Grid columns={1}>
      <Grid.Column>
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
              color="black"
              value="MEET THE TEAM"
            />
          </Item.Content>
        </Grid.Row>

        <Divider hidden />
        <Divider section hidden />

        <Grid.Row className="ui center aligned grid">
          <Card.Group stackable>
            <Card>
              <Card.Content>
                <Image centered size="medium" shape="rounded" src="https://media.licdn.com/media/AAEAAQAAAAAAAASfAAAAJDk4NzA1MjE0LTMwNWMtNDVlZC1hNWE3LWI1YzFjMzI1NmI2Yg.jpg" />
                <Divider />
                <Card.Header>Jimmie Gisclair</Card.Header>
                <Card.Meta>
                  <p>
                    <a href="https://www.linkedin.com/in/jimmie-gisclair/">LinkedIn</a>
                  </p>
                  <p>
                    <a href="https://github.com/Darkrender">GitHub</a>
                  </p>
                  <p>
                    <a href="https://jimmiegisclair.wordpress.com/">Blog</a>
                  </p>
                </Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image centered size="medium" shape="rounded" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnIAAAAJDQ5ZGQ2MmQyLThjYWItNDYyYi1iNzQ5LWQzYTc0ZGM1OGFiYQ.jpg" />
                <Divider />
                <Card.Header>Cory Wolnewitz</Card.Header>
                <Card.Meta>
                  <Card.Meta>
                    <p>
                      <a href="https://www.linkedin.com/in/cory-wolnewitz/">LinkedIn</a>
                    </p>
                    <p>
                      <a href="https://github.com/wolnewitz">GitHub</a>
                    </p>
                    <p>
                      <a href="https://codecor.wordpress.com/">Blog</a>
                    </p>
                  </Card.Meta>
                </Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image centered size="medium" shape="rounded" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAtOAAAAJDU5MTQ2MjFkLTU2NGYtNDg0Yi1iYjA1LWUyNjcxZWQyOThhYw.jpg" />
                <Divider />
                <Card.Header>Bobby Phan</Card.Header>
                <Card.Meta>
                  <p>
                    <a href="https://www.linkedin.com/in/bobby-phan-393b53135/">LinkedIn</a>
                  </p>
                  <p>
                    <a href="https://github.com/bwuphan">GitHub</a>
                  </p>
                </Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image centered size="medium" shape="rounded" src="https://i.gyazo.com/e6894fc283b7d1f8dda70737ccde1203.png" />
                <Divider />
                <Card.Header>Tyler Mackay</Card.Header>
                <Card.Meta>
                  <p>
                    <a href="https://github.com/tylermackay587">GitHub</a>
                  </p>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Row>

        <Divider section hidden />
        <Divider section hidden />
        <Divider section hidden />
        <Divider section hidden />

        <Grid.Row>
          <Container textAlign="center">
            <Item.Content>
              <Statistic
                size="large"
                color="black"
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
          </Container>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Container>;

export default About;
