import React from 'react';
import { Card, Header, Image, Icon } from 'semantic-ui-react';
import convertDistance from '../../../helpers/convertDistance';


const ListingInfoCard = ({ card, onListingClick }) => {
  if (card) {
    let picturePath;
    if (card.pictures[0]) {
      picturePath = card.pictures[0].img_path;
    } else {
      picturePath = 'http://www.itdesignhouse.com/wp-content/themes/TechNews/images/img_not_available.png';
    }
    return (
      <Card.Group className="ui center aligned grid" style={{ marginTop: '4px' }}>
        <Card
          fluid style={{ marginTop: '2px' }}
          onClick={() => onListingClick(card.id)}
        >
          <Card.Content>
            <Card.Header>
              <Header as={'h3'} color="green">
                {card.title}
              </Header>
            </Card.Header>
          </Card.Content>
          <Card.Content style={{ height: '160px' }}>
            <Image
              floated="left"
              size="small"
              src={picturePath}
            />
            <Card.Content>
              <Card.Description style={{ color: 'black' }} content={card.body} />
            </Card.Content>
          </Card.Content>
          <Card.Content style={{ color: 'black', height: '40px' }}>
            {card.distanceFromCenter && (<Card.Content description={`${convertDistance(card.distanceFromCenter)} miles away`} />)}
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
  return null;
};

export default ListingInfoCard;
