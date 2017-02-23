import React, { Component } from 'react';
import { Container, Search } from 'semantic-ui-react';

class ListingsContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchChange(e) {
    // dispatch controlled input update searchValue
  }

  render() {
    <Container>
      <Search
        loading={isLoading}
        onSearchChange={() => this.handleSearchChange()}
        value={searchValue}
        {...this.props}
      />
    </Container>
  }
}
