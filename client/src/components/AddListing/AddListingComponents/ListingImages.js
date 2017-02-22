import React from 'react';
import { Form, Input, Icon } from 'semantic-ui-react';

export const ListingImages = ({ onClick }) => {
  return (
    <div>
      <Form.Field>
        <Input
          icon={<Icon onClick={() => onClick()} name="plus" inverted circular link />}
          placeholder='Add image URL here'
        />
      </Form.Field>
    </div>
  )
}