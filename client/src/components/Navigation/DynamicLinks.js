import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

const DynamicLinks = ({ id, logout, location }) => {
  if (!id) {
    return (
      <Menu.Menu position="right">
        <Menu.Item color="green" as={Link} to="signup">
          Sign Up
        </Menu.Item>
        <Menu.Item color="green" as={Link} to="login" name="login">
          Login
        </Menu.Item>
      </Menu.Menu>
    );
  } else {
    return (
      <Menu.Menu position="right">
        <Menu.Item
          color="green"
          as={Link}
          to={`/user/${id}/dashboard`}
          active={location === '/profile'}
        >
          Profile
        </Menu.Item>
        <Menu.Item onClick={() => logout()}>
          Logout
        </Menu.Item>
      </Menu.Menu>
    );
  }
};

DynamicLinks.propTypes = {
  logout: React.PropTypes.func.isRequired,
};

export default DynamicLinks;
