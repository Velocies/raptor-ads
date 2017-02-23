import React from 'react';
import { Link } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react';
import DynamicLinks from './DynamicLinks';

const Navbar = ({ token, location, logout }) =>
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
      <DynamicLinks token={token} logout={logout} />
    </Menu>
  </Segment>;

export default Navbar;

Navbar.propTypes = {
  location: React.PropTypes.string.isRequired,
  token: React.PropTypes.string.isRequired,
};
