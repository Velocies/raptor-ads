import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

const ProfileNavbar = ({ changeDisplay, current }) =>
  <Menu>
    <Menu.Item
      as={Link}
      id="dashboard"
      onClick={() => changeDisplay('dashboard')}
      active={'dashboard' === current}
    >
      Dashboard
    </Menu.Item>
    <Menu.Item
      id="inbox"
      onClick={() => changeDisplay('inbox')}
      active={'inbox' === current}
    >
      Inbox
    </Menu.Item>
    <Menu.Item
      id="settings"
      onClick={() => changeDisplay('settings')}
      active={'settings' === current}
    >
    Settings
    </Menu.Item>
  </Menu>;

export default ProfileNavbar;
