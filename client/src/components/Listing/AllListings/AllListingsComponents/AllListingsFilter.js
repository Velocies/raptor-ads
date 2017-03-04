import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';


const AllListingsFilter = ({ onSelect, array, onSelectFilter, filters, onSelectDistance }) => {
  console.log('ARRAY IS', array);
  return (
    <Menu>
      <Menu.Item
        id="homeImprovement"
        onClick={(e) => onSelectFilter(document.getElementById('homeImprovement').innerHTML)}
        active={filters.categories['Home Improvement']}
      >
        Home Improvement
      </Menu.Item>
      <Menu.Item
        id="technology"
        onClick={(e) => onSelectFilter(document.getElementById('technology').innerHTML)}
        active={filters.categories['Technology']}
      >
        Technology
      </Menu.Item>
      <Menu.Menu position='right'>
        <Dropdown
          item text="Distance"
          options={array}
          fluid
          selection
          onChange={(e, data) => onSelectDistance(e, data)}
        >
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

export default AllListingsFilter;