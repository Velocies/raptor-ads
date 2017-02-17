import { Navbar } from './Navbar'
import { connect } from 'react-redux'
import { toggleNavigation } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    handleItemClick: (link) => {
      dispatch(toggleNavigation(link));
    }
  }
}

const mapStateToProps = (state) => state

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;


