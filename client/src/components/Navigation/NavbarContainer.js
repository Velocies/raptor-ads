import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../actions';

const mapStateToProps = (state) => {
  const location = state.routing.locationBeforeTransitions.pathname;
  const { token } = state.auth;

  return { location, token };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

export default NavbarContainer;

