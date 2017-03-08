import React from 'react';
import { Grid, Image, Header, Card } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import getAverageRating from '../helpers/getAverageRating';
import makeNamePossessive from '../helpers/makeNamePossessive';

const listings = [1,2,3,4,5,6];

const ProfileDashboard = ({ loggedInUser }) =>
  <Grid width={16} >
    <Grid.Column width={3} textAlign="center" className="profileContainer">
      <Card style={{ width: '200px' }}>
        <Image src="/client/src/assets/blankProfile.png" />
        <Header>
          { `${loggedInUser.firstName} ${loggedInUser.lastName}` }
        </Header>
        <Card.Content>
          <Header className="dateHeader">
            Member since:
          </Header>
          { new Date(loggedInUser.createdAt).toLocaleDateString() }
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Header className="dateHeader">
            {makeNamePossessive(loggedInUser.firstName)} rating:
          </Header>
          <StarRatingComponent
            name={'average'}
            value={getAverageRating(loggedInUser.ratings)}
            starColor="#31b234"
            editing={false}
            textAlign="center"
          />
          <Header className="ratingsHeader">
            View {makeNamePossessive(loggedInUser.firstName)} ratings
          </Header>
          <Header className="ratingsHeader">
            Leave {loggedInUser.firstName} a rating
          </Header>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column width={13}>
      <Card.Group itemsPerRow={1} stackable>
        {listings && listings.map(listing =>
          <Card>{listing}</Card>
        )}
      </Card.Group>
    </Grid.Column>
  </Grid>;

export default ProfileDashboard;
