import React from 'react';
import { Link } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react';

const Navbar = ({ location }) =>
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item
        as={Link}
        to="dashboard"
        className="logo"
      >
        <img alt="raptor" src="/client/src/assets/half-raptor.png" />
      </Menu.Item>
      <Menu.Item as={Link} to="landing" name="About" active={location === 'landing'} />
      <Menu.Item as={Link} to="dashboard" name="customer dashboard" active={location === 'dashboard'} />
      <Menu.Menu position="right">
        <Link to="/signup" className="item">
          Sign Up
        </Link>
        <Menu.Item as={Link} to="login" name="login">
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Segment>;

export default Navbar;

Navbar.propTypes = {
  location: React.PropTypes.string.isRequired,
};
