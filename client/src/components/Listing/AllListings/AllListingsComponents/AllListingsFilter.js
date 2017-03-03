import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';


const AllListingsFilter = () =>
  <Menu>
    <Menu.Item
      name='all jobs'
    >
      All
    </Menu.Item>

    <Menu.Item
      name='Home Improvement'
    >
      Home Improvement
    </Menu.Item>

    <Menu.Item
      name='Technology'
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
      <Dropdown item text='Sort By'>
        <Dropdown.Menu>
          <Dropdown.Item>Distance</Dropdown.Item>
          <Dropdown.Item>Ratings</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>;

export default AllListingsFilter;