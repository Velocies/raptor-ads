import React from 'react';
import { Form } from 'semantic-ui-react';

export const ListingTitle = ({ title, onChange }) => {
  return (
    <Form.Field className="ui center aligned grid">
      <label>Title</label>
      <input
        placeholder="Insert title of job here"
        name="title"
        value={title}
        onChange={e => onChange(e)}
      />
    </Form.Field>
  );
};

