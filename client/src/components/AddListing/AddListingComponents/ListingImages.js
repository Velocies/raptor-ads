import React from 'react';
import { Form, Input, Icon } from 'semantic-ui-react';

export const ListingImages = ({ onClick, onChange, image }) => {
  return (
    <div>
      <Form.Field>
        <Input
          icon={<Icon onClick={(e) => onClick(e)} name="plus" inverted circular link />}
          placeholder='Add image URL here'
          value={image}
          name="image"
          onChange={e => onChange(e)}
        />
      </Form.Field>
    </div>
  )
}