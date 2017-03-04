import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';


const AllListingsFilter = ({ onSelect, array, onSelectFilter }) => {
  console.log('ARRAY IS', array);
  return (
    <Menu>
      <Menu.Item
        name='all jobs'
      >
        All
      </Menu.Item>

      <Menu.Item
        id="homeImprovement"
        onClick={(e) => onSelectFilter(document.getElementById('homeImprovement').innerHTML)}
      >
        Home Improvement
      </Menu.Item>

      <Menu.Item
        id="technology"
        onClick={(e) => onSelectFilter(document.getElementById('technology').innerHTML)}
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