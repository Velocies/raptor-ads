import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Pagination extends Component {
  constructor(props) {
    super();
    // onMount reset pagination
  }

  render() {
    return (
      <Menu pagination>
        <Menu.Item name="1" />
      </Menu>
    );
  }
}

export default Pagination;
