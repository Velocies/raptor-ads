import React from 'react';
import { Dropdown, Header, Divider, Item } from 'semantic-ui-react';

const AllListingsFilter = ({ onClick }) => {
  return (
    <Dropdown text='Filter' floating labeled button className='icon'>
      {/* <i class="filter icon"></i> */}
      <Dropdown.Menu>
        <Dropdown.Header icon='tags' content='Filter by tag' />
        <Dropdown.Divider />
        <Dropdown.Item onClick={(e) => onClick(e)} icon='attention' text='Important'>HELLO</Dropdown.Item>
        <Dropdown.Item icon='comment' text='Announcement' />
        <Dropdown.Item icon='conversation' text='Discussion' />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AllListingsFilter;
