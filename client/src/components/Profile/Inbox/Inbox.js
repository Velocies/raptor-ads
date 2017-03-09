import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Header, Loader } from 'semantic-ui-react';
import { getAllReceivedMessages } from '../../../actions/inboxActions';
import MessagesTable from './MessagesTable';
import { changeContactField, sendMessage } from '../../../actions/fullListingActions';
import { clearErrors } from '../../../actions/listingActions';

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getAllReceivedMessages(this.props.userId));
  }

  onSubmit(e, listingId, userId) {
    e.preventDefault();
    const data = this.props.contactForm;
    const postId = listingId;
    const senderId = this.props.userId;
    const payload = { title: data.title, body: data.body, postId, userId, senderId };
    this.props.dispatch(clearErrors());
    this.props.dispatch(sendMessage(payload));
  }

  onChange(e, data) {
    if (data) {
      this.props.dispatch(changeContactField('type', data.value));
    } else {
      this.props.dispatch(changeContactField(e.target.name, e.target.value));
    }
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
          <MessagesTable
            allMessages={allMessages}
            convertTime={this.convertTime}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { contactForm } = state.messages;
  const { isFetching, allMessages } = state.inbox;
  const { id } = state.auth.loggedInUser;

  return {
    allMessages,
    isFetching,
    contactForm,
  };
};

Inbox.propTypes = {
  userId: React.PropTypes.number.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  contactForm: React.PropTypes.object.isRequired,
  allMessages: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Inbox);
