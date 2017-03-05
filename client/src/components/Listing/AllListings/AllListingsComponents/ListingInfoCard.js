import React from 'react';
import { Card, Header, Image, Icon } from 'semantic-ui-react';


const description =
  'Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'


const ListingInfoCard = () => (
  <Card.Group className="ui center aligned grid">
    <Card fluid>
    <Card.Content header='About Amy' />
    <Card.Content>
      <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
    </Card.Content>
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />
      4 Friends
    </Card.Content>
  </Card>
  </Card.Group>
)

export default ListingInfoCard;