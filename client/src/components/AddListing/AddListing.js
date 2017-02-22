import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { changeListingField } from '../../actions';
import { ListingTitle } from './ListingTitle';

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
      <div>
        <h2>Add Listing</h2>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={11}>
            <ListingTitle onChange={this.onChange} titleField={this.props.title}/>
          </Grid.Column>
        </Grid>
      </div>
    );
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
