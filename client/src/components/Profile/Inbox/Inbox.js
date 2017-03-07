import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Loader, Message, Link } from 'semantic-ui-react';
import { getAllReceivedMessages } from '../../../actions/inboxActions';

class Inbox extends Component {

  componentDidMount() {
    this.props.dispatch(getAllReceivedMessages(this.props.userId));
  }

  convertTime(time) {
    return moment(time).fromNow();
  }

  render() {
    const { isFetching, allMessages } = this.props;

    if (isFetching) {
      return <Loader active inline="centered" />;
    }

    return (
      <Container textAlign="center">
        <Header as="h1" className="center">-- Inbox -- <br /></Header>

        <Container textAlign="left">
          {
            allMessages && allMessages.map(message =>
              <Message key={message.id}>
                <Message.Header>{message.title}</Message.Header>
                <Message.Content>Received {this.convertTime(message.createdAt)}</Message.Content>
              </Message>,
            )
          }
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { isFetching, allMessages } = state.inbox;
  const { id } = state.auth.loggedInUser;
  const userId = id;

  return {
    userId,
    allMessages,
    isFetching,
  };
};

Inbox.propTypes = {
  userId: React.PropTypes.number.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  allMessages: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Inbox);
