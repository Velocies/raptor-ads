import React from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import { jobCategories } from '../../jobCategories';

const ListingJobTypes = ({ onChange, type }) => {
  return (
    <Form.Field className="ui center aligned grid">
      <label htmlFor="category">Job Category</label>
      <Dropdown
        fluid
        selection
        options={jobCategories}
        placeholder="Select type of job here"
        onChange={(e, data) => onChange(e, data)}
        label="Profession"
      />
    </Form.Field>
  );
};

export default ListingJobTypes;
