import React from 'react';
import NavbarContainer from './Navigation/NavbarContainer';

const App = ({ children }) =>
  <div>
    <NavbarContainer />
    { children }
  </div>;

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
