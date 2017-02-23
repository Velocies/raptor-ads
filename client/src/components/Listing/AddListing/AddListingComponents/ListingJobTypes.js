import React from 'react';
import { Form } from 'semantic-ui-react';
import { jobCategories} from '../../jobCategories';

export const ListingJobTypes = ({ onChange }) => {
  return (
    <Form.Field
      rows="2"
      className="ui center aligned grid"
      control="select"
      placeholder="Select type of job here"
      name="jobCategory"
      onChange={e => onChange(e)}
      label="Profession"
    >
      {jobCategories.map((category, index) =>
        <option value={category.value} key={index}>{category.text}</option>
      )}
    </Form.Field>
  );
};

/*

<Form.Field label='An HTML <select>' control='select'>         <option value='male'>Male</option>         <option value='female'>Female</option>       </Form.Field>

   <Form.Select
      className="ui center aligned grid"
      label="Job Type"
      placeholder="Select type of job here"
      onChange={e => onChange(e)}
    >
      {jobCategories.map((category, index) =>
        <option value={category.value} key={index} />
      )}
    </Form.Select>

*/