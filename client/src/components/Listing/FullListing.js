import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class FullListing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, body, images, createdAt } = this.props
    return (
      <Container text>
        <h1>{title}</h1>
        <p>{body}</p>
      </Container>
    );
  }
}

FullListing.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  images: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  createdAt: React.PropTypes.string.isRequired,
};

export default FullListing;
