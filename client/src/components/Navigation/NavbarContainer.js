import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  const location = state.routing.locationBeforeTransitions.pathname;

  return { location };
};

const NavbarContainer = connect(
  mapStateToProps,
)(Navbar);

export default NavbarContainer;

