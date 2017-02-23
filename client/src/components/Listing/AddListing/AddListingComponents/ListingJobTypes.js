import React from 'react';
import { Form } from 'semantic-ui-react';
import { jobCategories } from '../../jobCategories';

const ListingJobTypes = ({ onChange, type }) => {
  return (
    <Form.Field
      rows="2"
      className="ui center aligned grid"
      control=""
      placeholder="Select type of job here"
      name="type"
      onChange={e => onChange(e)}
      label="Profession"
      value={type}
    >
      {jobCategories.map((category, index) =>
        <option
          value={category.value}
          key={index}
        >
          {category.text}
        </option>
      )}
    </Form.Field>
  );
};

export default ListingJobTypes;
