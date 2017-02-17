import React, { Component } from 'react';
import NavbarContainer from './NavbarContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        {this.props.children}
      </div>
    );
  }
}
