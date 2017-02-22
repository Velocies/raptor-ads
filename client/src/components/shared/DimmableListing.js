import React, { Component } from 'react';
import { Card, Button, Dimmer, Header } from 'semantic-ui-react';
import Listing from './Listing';

class DimmableListing extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ active: true });
  }

  handleHide() {
    this.setState({ active: false });
  }

  render() {
    const { active } = this.state;
    const { title, createdAt, body } = this.props;

    const content = (
      <div>
        <Header as="h2" inverted>Title</Header>

        <Button primary>Add</Button>
        <Button>View</Button>
      </div>
    );

    return (
      <Dimmer.Dimmable
        dimmed={active}
        as={Listing}
        title={title}
        createdAt={createdAt}
        body={body}
        onMouseEnter={() => this.handleShow()}
        onMouseLeave={() => this.handleHide()}
      >
        <Dimmer
          active={active}
          dimmer={{ active, content }}
        />
      </Dimmer.Dimmable>
    );
  }
}

export default DimmableListing;
