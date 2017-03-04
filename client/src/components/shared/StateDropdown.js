import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import stateOptions from '../helpers/stateOptions';

const StateDropdown = ({onChange}) =>
  <div className="field">
    <label htmlFor="state">State</label>
    <Dropdown
      placeholder="State"
      options={stateOptions}
      search
      selection
      fluid
    />
  </div>;

export default StateDropdown;
