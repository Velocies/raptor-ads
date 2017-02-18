import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleSignupLink } from '../../actions';
import CustomerSignup from '../Signup/CustomerSignup';
import ProSignup from '../Signup/ProSignup';

class Signup extends Component {
  constructor() {
    super()
    this.findActiveLink = this.findActiveLink.bind(this)
  }

  findActiveLink(link) {
    return this.props.activeLink === link ? 'active' : '';
  }

  render() {
    const { toggleSignupLink } = this.props;
    const { activeLink: link } = this.props;
    return (
      <div>
        <Grid centered>
          <div className="signup-buttons">
            <Button.Group size='large'>
              <Button
                onClick={()=>toggleSignupLink('customer')}
                className={this.findActiveLink('customer')}
              >
                Customer
              </Button>
              <Button.Or />
              <Button
                onClick={()=>toggleSignupLink('professional')}
                className={this.findActiveLink('professional')}
              >
                Professional
              </Button>
            </Button.Group>
          </div>
        </Grid>
        {link === 'professional' ? <ProSignup /> : <CustomerSignup />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeLink: state.auth.signupForm.activeLink
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSignupLink: link => dispatch(toggleSignupLink(link))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
