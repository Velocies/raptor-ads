import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import range from 'lodash/range';
import { changeActiveItem } from './actions';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(_, { name }) {
    this.props.dispatch(changeActiveItem(name));
  }

  render() {
    const { items, dispatch } = this.props;
    const { activeItem } = this.props.pagination;

    return (
      <Menu pagination>
        {range(1, items + 1).map(num =>
          <Menu.Item
            name={num}
            active={activeItem === num}
            onClick={(e, data) => this.handleClick(e, data)}
          />
        )}
      </Menu>
    );
  }
}

export default connect(state => state)(Pagination);
