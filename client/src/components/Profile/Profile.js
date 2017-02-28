import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Header } from 'semantic-ui-react';
import { updateFormField } from '../../actions/profileActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.dispatch(updateFormField(e.target.name, e.target.value));
  }

  componentDidMount() {
    this.props,dispatch(getCurrentProfile(loggedInUser));
  }

  render() {
    const {
      firstName,
    } = this.props.profileForm;
    return (
      <div>
        <div>
          <Header textAlign="center">Your Profile</Header>
        </div>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={11}>
          <Form>
            <Form.Field width="8">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={e => this.onChange(e)}
              />
            </Form.Field>
          </Form>
          </Grid.Column>
        </Grid>
        <h1>PROFILE COMPONENT HERE</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { profileForm } = state.profile;
  const { loggedInUser} = state.auth;
  return {
    profileForm,
    loggedInUser,
  };
};

export default connect(mapStateToProps)(Profile);
