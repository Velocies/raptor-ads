import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleSignup } from '../../actions';
import CustomerSignup from '../Signup/CustomerSignup';
import ProSignup from '../Signup/ProSignup';

class Signup extends Component {
  constructor() {
    super()
    this.findActiveLink = this.findActiveLink.bind(this)
  }

  findActiveLink(link) {
    return this.props.link === link ? 'active' : '';
  }

  renderSignupForm(link) {
    return this.props.link === link ? 'active' : '';
  }

  render() {
    const { dispatch } = this.props;
    const { link } = this.props;
    return (
      <div>
        <Grid centered>
          <div className="signup-buttons">
            <Button.Group size='large'>
              <Button
                onClick={()=>dispatch(toggleSignup('customer'))}
                className={this.findActiveLink('customer')}
              >
                Customer
              </Button>
              <Button.Or />
              <Button
                onClick={()=>dispatch(toggleSignup('professional'))}
                className={this.findActiveLink('professional')}
              >
                Professional
              </Button>
            </Button.Group>
          </div>
        </Grid>
        { link === undefined ? null : link === 'professional' ? <ProSignup /> : <CustomerSignup /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    link: state.app.link
  }
}
export default connect(mapStateToProps)(Signup)
