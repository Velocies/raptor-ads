import React from 'react';
import { Form } from 'semantic-ui-react';

export const ListingImages = () => {
  return (
    <Form.TextArea
      rows="1"
      className="ui center aligned grid"
      label="Images"
      placeholder="Insert title of job here"
    />
  )
}