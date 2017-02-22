import React from 'react';
import { Form } from 'semantic-ui-react';

export const ListingTitle = ({title, onChange}) => {
  return (
    <Form onSubmit={e => this.onSubmit(e)}>
      <Form.Field width="8">
        <label htmlFor="firstName">Title</label>
        <input
          placeholder="Insert Title here"
          name="title"
          value={title}
          onChange={e => onChange(e)}
        />
      </Form.Field>
    </Form>
  )
}