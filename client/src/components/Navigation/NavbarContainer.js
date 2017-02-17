import { Navbar } from './Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const location = state.routing.locationBeforeTransitions.pathname;

  return { location };
}

const NavbarContainer = connect(
  mapStateToProps
)(Navbar);

export default NavbarContainer;


