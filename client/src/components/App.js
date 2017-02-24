import React, { Component } from 'react';
import NavbarContainer from './Navigation/NavbarContainer';

class App extends Component {
  constructor(props) {
    super(props);
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
