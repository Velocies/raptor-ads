import React from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react';
import DeleteProfileModal from './deleteProfileModal';

const ProfileSettings = ({ onDeleteClick, onUpdateClick, onChange, firstName, lastName, email, business, address, city, zip, state, profile_img_path, role, profileUpdated }) =>
  <div>
    <div>
      <Header textAlign="center">Your Profile</Header>
    </div>
    <Grid width={16}>
      <Grid.Column width={5}>
        <Form>
          <Form.Field>
            <label htmlFor="profile_img_path">Profile Picture</label>
            <input
              id="profile_img_path"
              name="profile_img_path"
              value={profile_img_path}
              onChange={e => onChange(e)}
            />
          </Form.Field>
        </Form>
      </Grid.Column>
      <Grid.Column width={11}>
        <Form>
          <Form.Field width="8">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={e => onChange(e)}
            />
          </Form.Field>
          <Form.Field width="8">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={e => onChange(e)}
            />
          </Form.Field>
          <Form.Field width="8">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />
          </Form.Field>
          { role === 'customer' ? '' :
            <Form.Field width="8">
              <label htmlFor="businessName">Business</label>
              <input
                id="businessName"
                name="businessName"
                value={business.companyName}
                onChange={e => onChange(e)}
              />
            </Form.Field>
          }
          <Form.Field width="8">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              value={!address ? business.companyAddress : address}
              onChange={e => onChange(e)}
            />
          </Form.Field>
          <Form.Field width="8">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              value={!city ? business.companyCity : city}
              onChange={e => onChange(e)}
            />
          </Form.Field>
          <Form.Field width="8">
            <label htmlFor="zip">Zip</label>
            <input
              id="zip"
              name="zip"
              value={!zip ? business.companyZip : zip}
              onChange={e => onChange(e)}
            />
          </Form.Field>
          <Form.Field width="8">
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              value={!state ? business.companyState : state}
              onChange={e => onChange(e)}
            />
          </Form.Field>
          <Form.Field width="8">
            <Button type="button" onClick={() => onUpdateClick()}>
              Update Profile
            </Button>
            <DeleteProfileModal onDeleteClick={onDeleteClick} />
            { profileUpdated ?
              <label htmlFor="profileUpdated">Profile Updated!</label>
              : null
            }
          </Form.Field>
        </Form>
      </Grid.Column>
    </Grid>
  </div>;

export default ProfileSettings;
