import React from 'react';
import { Form, Icon, Input } from 'semantic-ui-react';

const AllListingsSearch = ({ onChange, onSubmit }) =>
  <Form onSubmit={e => onSubmit(e)}>
    <Form.Field>
      <Input
        icon={<Icon onClick={e => onSubmit(e)} name="search" inverted circular link />}
        placeholder="Enter search address here"
        name="image"
        onChange={e => onChange(e)}
        size="large"
      />
    </Form.Field>
  </Form>;

AllListingsSearch.propTypes = {
  onChange: React.PropTypes.func.isRequired,
}

export default AllListingsSearch;
