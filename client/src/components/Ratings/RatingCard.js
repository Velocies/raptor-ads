import React from 'react';
import { Card } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';

const RatingCard = ({stars, editable, content, rater}) =>
  <Card>
    <Card.Content>
      <Card.Header>
        <StarRatingComponent
          name={"rating"}
          value={+stars}
          editing={editable}
          starColor="#31b234"
        />
      </Card.Header>
      <Card.Description>{`"${content}"`}</Card.Description>
      <Card.Meta>{rater.firstName}</Card.Meta>
    </Card.Content>
  </Card>;

export default RatingCard;
