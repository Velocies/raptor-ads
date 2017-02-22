import React from 'react';
import { Form } from 'semantic-ui-react';

export const ListingTitle = ({ title, onChange }) => {
  return (
    <Form.TextArea
      rows="1"
      className="ui center aligned grid"
      label="Title"
      placeholder="Insert title of job here"
      name="title"
      value={title}
      onChange={e => onChange(e)}
    />
  );
};

