import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

const DynamicLinks = ({ token, logout }) => {
  if (token === '') {
    return (
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="signup">
          Sign Up
        </Menu.Item>
        <Menu.Item as={Link} to="login" name="login">
          Login
        </Menu.Item>
      </Menu.Menu>
    );
  } else {
    return (
      <Menu.Menu position="right">
        <Menu.Item onClick={() => logout()}>
          Logout
        </Menu.Item>
      </Menu.Menu>
    );
  }
};

DynamicLinks.propTypes = {
  token: React.PropTypes.string.isRequired,
  logout: React.PropTypes.func.isRequired,
};

export default DynamicLinks;
