import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import NavbarContainer from './Navigation/NavbarContainer';
import { pullUserFromToken } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const token = localStorage.getItem('raptor_token');
    if (token) {
      jwt.verify(token, 'bobbyisbadatstarcraft', (err, decoded) => {
        if (err) {
          localStorage.removeItem('raptor_token');
        } else {
          this.props.dispatch(pullUserFromToken(decoded));
        }
      });
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

export default App;
