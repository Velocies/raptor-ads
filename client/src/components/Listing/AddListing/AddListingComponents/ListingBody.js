import React from 'react';
import { Form } from 'semantic-ui-react';

export const ListingBody = ({ body, onChange }) => {
  return (
    <Form.TextArea
      rows="5"
      className="ui center aligned grid"
      label="Job Description"
      placeholder="Tell us about the job..."
      name="body"
      value={body}
      onChange={e => onChange(e)}
    />
  );
};

