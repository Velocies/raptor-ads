import React from 'react';
import { Link } from 'react-router';
import { Card, Header, Image, Icon } from 'semantic-ui-react';
import convertDistance from '../../../helpers/convertDistance';


const ListingInfoCard = ({ card }) => {
  if (card) {
    let picturePath;
    if (card.pictures[0]) {
      picturePath = card.pictures[0].img_path
    } else {
      picturePath = 'http://www.itdesignhouse.com/wp-content/themes/TechNews/images/img_not_available.png'
    }
    return (
      <Link to={`listings/${card.id}`}>
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
      </Link>
    )
  } else {
    return (<div></div>)
  }
};

export default ListingInfoCard;

// to={`listings/${card.id}`}

// http://127.0.0.1:3000/listings/9
// http://127.0.0.1:3000/listings/9