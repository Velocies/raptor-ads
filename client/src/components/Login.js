import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeLoginField, loginUser } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    const { dispatch } = this.props;
    dispatch(changeLoginField(e.target.name, e.target.value));
  }

  login(e) {
    e.preventDefault();
    const { dispatch, email, password } = this.props;
    dispatch(loginUser({ email, password }));
  }

  render() {
    const { dispatch, email, password } = this.props;
    return (
      <div>
        <Header textAlign="center"><Icon name="user" />Log In</Header>
        <Grid width={16}>
          <Grid.Column width={5} />
          <Grid.Column width={11}>
            <Form>
              <Form.Field width="8">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <label htmlFor="email">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Field>
              <Form.Field width="8">
                <Button
                  type="submit"
                  onClick={(e) => this.login(e)}
                >
                  Login
                </Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { email, password } = state.auth.loginForm;

  return { email, password };
};

export default connect(mapStateToProps)(Login);
