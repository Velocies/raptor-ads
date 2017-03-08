import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import range from 'lodash/range';

class Pagination extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { items } = this.props;

    return (
      <Menu pagination>
        {range(1, items+1).map(num =>
          <Menu.Item name={num} />
        )}
      </Menu>
    );
  }
}

export default connect(state => state)(Pagination);
