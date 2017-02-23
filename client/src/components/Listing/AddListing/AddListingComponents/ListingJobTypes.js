import React from 'react';
import { Form } from 'semantic-ui-react';
import { jobCategories } from '../../jobCategories';

const ListingJobTypes = ({ onChange }) => {
  return (
    <Form.Field
      rows="2"
      className="ui center aligned grid"
      control="select"
      placeholder="Select type of job here"
      name="type"
      onChange={e => onChange(e)}
      label="Profession"
    >
      {jobCategories.map((category, index) =>
        <option value={category.value} key={index}>{category.text}</option>
      )}
    </Form.Field>
  );
};

export default ListingJobTypes;
