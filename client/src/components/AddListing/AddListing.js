import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Icon, TextArea } from 'semantic-ui-react';
import { changeListingField } from '../../actions';
import { ListingTitle } from './AddListingComponents/ListingTitle';

class AddListing extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.dispatch(changeListingField(e.target.name, e.target.value));
  }

  render() {
    return (
      <Grid width={16}>
        <Grid.Column width={5} />
        <Grid.Column width={6}>
          <Form widths="equal">
            <Form.TextArea rows="1" className="ui center aligned grid" label='Title' placeholder='Insert title of job here' />
            <Form.Select className="ui center aligned grid" label='Jobs' />
            <Form.TextArea rows="5" className="ui center aligned grid" label='Job Description' placeholder='Tell us about the job...' />
            <Form.Button className="ui center aligned grid" >Submit</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  const { listingForm } = state.listing;
  return {
    listingForm,
  };
};

// AddListing.propTypes = {

// };

export default connect(mapStateToProps)(AddListing);
