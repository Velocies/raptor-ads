import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import getAverageRating from '../helpers/getAverageRating';

const ProfileDashboard = ({ loggedInUser }) =>
  <Grid width={16} >
    <Grid.Column width={1} />
    <Grid.Column width={3} textAlign="center" className="profileContainer" >
      <Image src="./client/src/assets/blankProfile.png" />
      <Header>Tyler Mackay</Header>
      <StarRatingComponent
        name={'average'}
        value={getAverageRating(loggedInUser.ratings)}
        starColor="#31b234"
        editing={false}
      />
      <Header className="dateHeader">
        Member since:
      </Header>
      { new Date(loggedInUser.createdAt).toLocaleDateString() }
    </Grid.Column>
  </Grid>;

export default ProfileDashboard;
