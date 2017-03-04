import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';


const AllListingsFilter = ({ onSelect, array, onSelectFilter, filters }) => {
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
        <Dropdown item text='Distance'>
          <Dropdown.Menu>
            <Dropdown.Item>10 miles</Dropdown.Item>
            <Dropdown.Item>30 miles</Dropdown.Item>
            <Dropdown.Item>All</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          item text="Sort by"
          options={array}>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

export default AllListingsFilter;