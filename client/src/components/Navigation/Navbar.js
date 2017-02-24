import React from 'react';
import { Link } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react';
import DynamicLinks from './DynamicLinks';

const Navbar = ({ id, location, logout }) =>
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
      <Menu.Item as={Link} to="listings" name="Listings" active={location === 'listings'} />
      <Menu.Item as={Link} to="dashboard" name="customer dashboard" active={location === 'dashboard'} />
      <Menu.Item as={Link} to="addlisting" name="addlisting" active={location === 'addlisting'} />
      <DynamicLinks id={id} logout={logout} />
    </Menu>
  </Segment>;

export default Navbar;

Navbar.propTypes = {
  location: React.PropTypes.string.isRequired,
  token: React.PropTypes.string.isRequired,
};
