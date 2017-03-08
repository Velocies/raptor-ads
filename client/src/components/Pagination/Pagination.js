import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Pagination extends Component {
  constructor(props) {
    super();
    this.props.dispatch(resetPagination());
  }

  render() {
    return (
      <Menu pagination>
        <Menu.Item name="1" />
      </Menu>
    );
  }
}

export default connect(state => state)(Pagination);
