import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

const ProfileNavbar = ({ current, userId }) =>
  <Menu>
    <Menu.Item
      as={Link}
      to={`/user/${userId}/dashboard`}
      id="dashboard"
      active={'dashboard' === current}
    >
      Dashboard
    </Menu.Item>
    <Menu.Item
      as={Link}
      id="inbox"
      to={`/user/${userId}/inbox`}
      active={'inbox' === current}
    >
      Inbox
    </Menu.Item>
    <Menu.Item
      as={Link}
      id="settings"
      to={`/user/${userId}/settings`}
      active={'settings' === current}
    >
    Settings
    </Menu.Item>
  </Menu>;

export default ProfileNavbar;
