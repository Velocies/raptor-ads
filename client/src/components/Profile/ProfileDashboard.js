import React from 'react';
import { Grid, Image, Header, Card } from 'semantic-ui-react';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import getAverageRating from '../helpers/getAverageRating';
import makeNamePossessive from '../helpers/makeNamePossessive';

const listings = [1,2,3,4,5,6];

const ProfileDashboard = ({ user }) =>
  <Grid width={16} >
    <Grid.Column width={3} textAlign="center" className="profileContainer">
      <Card style={{ width: '200px' }}>
        <Image src={user.profile_img_path || '/client/src/assets/blankProfile.png'} />
        <Header>
          { `${user.firstName} ${user.lastName}` }
        </Header>
        <Card.Content>
          <Header className="dateHeader">
            Member since:
          </Header>
          { new Date(user.createdAt).toLocaleDateString() }
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Header className="dateHeader">
            {makeNamePossessive(user.firstName)} rating:
          </Header>
          <StarRatingComponent
            name={'average'}
            value={getAverageRating(user.ratings)}
            starColor="#31b234"
            editing={false}
            textAlign="center"
          />
          <Link className="ratingsHeader" to={`/user/${user.id}/ratings`}>
          <Header className="ratingsHeader">
            View {makeNamePossessive(user.firstName)} ratings
            </Header>
          </Link>
          <Link className="ratingsHeader" to={`/user/${user.id}/ratings/new`}>
          <Header className="ratingsHeader">
            Write a Review for { user.firstName }
            </Header>
          </Link>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column width={13}>
      <Card.Group itemsPerRow={1} stackable>
        {listings && listings.map(listing =>
          <Card>{listing}</Card>,
        )}
      </Card.Group>
    </Grid.Column>
  </Grid>;

export default ProfileDashboard;
