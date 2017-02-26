import React from 'react';
import { Form } from 'semantic-ui-react';

const ListingBody = ({ body, onChange }) =>
  <Form.TextArea
    rows="5"
    className='ui center aligned grid'
    label="Job Description"
    placeholder="Tell us about the job..."
    name="body"
    value={body}
    onChange={e => onChange(e)}
  />;


ListingBody.propTypes = {
  body: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default ListingBody;
