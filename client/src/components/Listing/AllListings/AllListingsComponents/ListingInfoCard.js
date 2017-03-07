import React from 'react';
import { Card, Header, Image, Icon } from 'semantic-ui-react';
import convertDistance from '../../../helpers/convertDistance';


const ListingInfoCard = ({ card }) => {
  if (card) {
    let picturePath;
    if (card.pictures[0]) {
      picturePath = card.pictures[0].img_path
    } else {
      picturePath = 'http://www.satcomresources.com/c.788689/vsat/img/no_image_available.jpeg'
    }
    return (
      <Card.Group className="ui center aligned grid" style={{marginTop: '2px'}}>
        <Card fluid style={{marginTop: '2px'}}>
        <Card.Content header={card.title} />
        <Card.Content style={{height: '160px'}}>
          <Image floated='left' size='small' src={picturePath} /> <Card.Content description={card.body} />
        </Card.Content>
        <Card.Content style={{height: '40px'}}>
          {card.distanceFromCenter && (<Card.Content description={`${convertDistance(card.distanceFromCenter)} miles away`} />)}
        </Card.Content>
      </Card>
      </Card.Group>
    )
  } else {
    return (<div></div>)
  }
};

export default ListingInfoCard;
