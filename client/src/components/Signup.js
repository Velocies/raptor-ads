import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleSignup } from '../actions';

class Signup extends Component {
  constructor() {
    super()
    this.findActiveLink = this.findActiveLink.bind(this)
  }

  findActiveLink(link) {
    return this.props.link === link ? 'active' : '';
  }

  render() {
    const { toggleSignupLink } = this.props
    return (
      <div>
        <div className="signup-button-group">
          <Grid centered>
            <Button.Group size='large'>
              <Button onClick={()=>toggleSignupLink('customer')} className={this.findActiveLink('customer')}>Customer</Button>
              <Button.Or />
              <Button onClick={()=>toggleSignupLink('professional')} className={this.findActiveLink('professional')}>Professional</Button>
            </Button.Group>
          </Grid>
        </div>
        <Grid width={16}>
          <Grid.Column width={5}>
          </Grid.Column>
          <Grid.Column width={11}>
            <Form>
              <Form.Field width="8">
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field width="8">
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              <Form.Field width="8">
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field width="8">
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Form.Field width="8">
                <label>Confirm Password</label>
                <input placeholder='Confirm Password' />
              </Form.Field>
              <Form.Field width="8">
                <Button type='submit'>Sign Up</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSignupLink: (link) => dispatch(toggleSignup(link))
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    link: state.app.link
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
