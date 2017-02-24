import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarContainer from './Navigation/NavbarContainer';
import { pullUserFromToken } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const token = localStorage.getItem('raptor_token');
    if (token) {
      this.props.dispatch(pullUserFromToken(token));
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <NavbarContainer />
        { children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element,
};

export default connect(state=>state)(App);
