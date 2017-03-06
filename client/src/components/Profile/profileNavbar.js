import React from 'react';
import { Menu } from 'semantic-ui-react';

const ProfileNavbar = ({ changeDisplay }) =>
  <Menu>
    <Menu.Item
      id="dashboard"
      onClick={() => changeDisplay('dashboard')}
    >
      Dashboard
    </Menu.Item>
    <Menu.Item
      id="inbox"
      onClick={() => changeDisplay('inbox')}
    >
      Inbox
    </Menu.Item>
    <Menu.Item
      id="settings"
      onClick={() => changeDisplay('settings')}
    >
    Settings
    </Menu.Item>
  </Menu>;

export default ProfileNavbar;
