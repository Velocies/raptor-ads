import React from 'react';
import { Form } from 'semantic-ui-react';

const ListingBody = ({ body, onChange, getFormClass }) =>
  <Form.TextArea
    rows="5"
    label="Job Description"
    placeholder="Tell us about the job..."
    name="body"
    value={body}
    onChange={e => onChange(e)}
    className={getFormClass('body')}
  />;


ListingBody.propTypes = {
  body: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  getFormClass: React.PropTypes.func.isRequired,
};

export default ListingBody;
