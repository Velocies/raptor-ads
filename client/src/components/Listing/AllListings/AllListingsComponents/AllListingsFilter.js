import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';


const AllListingsFilter = ({ onSelect, distanceArray, onSelectFilter, filters, onSelectDistance, sortArray, onSelectSort }) => {
  return (
    <Menu>
      <Menu.Item
        id="homeImprovement"
        onClick={(e) => onSelectFilter(document.getElementById('homeImprovement').innerHTML)}
        active={filters.category === 'home improvement'}
      >
        Home Improvement
      </Menu.Item>
      <Menu.Item
        id="technology"
        onClick={(e) => onSelectFilter(document.getElementById('technology').innerHTML)}
        active={filters.category === 'technology'}
      >
        Technology
      </Menu.Item>
      <Menu.Menu position='right'>
        <Dropdown
          item text="Distance"
          options={distanceArray}
          fluid
          selection
          onChange={(e, data) => onSelectDistance(e, data)}
        >
        </Dropdown>
      </Menu.Menu>
      <Menu.Menu>
        <Dropdown
          item text="Sort By"
          options={sortArray}
          fluid
          selection
          onChange={(e, data) => onSelectSort(e, data)}
        >
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

export default AllListingsFilter;