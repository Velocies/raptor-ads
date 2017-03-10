import React from 'react';
import { Link } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react';
import DynamicLinks from './DynamicLinks';

const Navbar = ({ id, location, logout }) =>
  <Segment inverted>
    <Menu inverted borderless>
      <Menu.Item
        as={Link}
        to="landing"
        className="logo"
      >
        <img alt="raptor" src="/client/src/assets/half-raptor.png" />
      </Menu.Item>
      <Menu.Item as={Link} to="/about" color="green" name="About" active={location === '/about'} />
      <Menu.Item as={Link} to="/listings" name="Listings" color="green" active={location === '/listings'} />
      <Menu.Item as={Link} to="/dashboard" color="green" name="customer dashboard" active={location === '/dashboard'} />
      <Menu.Item as={Link} to="/addlisting" color="green" name="addlisting" active={location === '/addlisting'} />
      <DynamicLinks location={location} id={id} logout={logout} />
    </Menu>
  </Segment>;

export default Navbar;

Navbar.propTypes = {
  location: React.PropTypes.string.isRequired,
};
