import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleSignupLink } from '../../actions';
import CustomerSignup from '../Signup/CustomerSignup';
import ProSignup from '../Signup/ProSignup';

class Signup extends Component {
  constructor() {
    super();
    this.findActiveLink = this.findActiveLink.bind(this);
  }

  findActiveLink(link) {
    return this.props.activeLink === link ? 'active' : '';
  }

  render() {
    const { toggleActiveLink } = this.props;
    const { activeLink: link } = this.props;
    return (
      <div>
        <Grid centered>
          <div className="signup-buttons">
            <Button.Group size="large">
              <Button
                onClick={() => toggleActiveLink('customer')}
                className={this.findActiveLink('customer')}
              >
                Customer
              </Button>
              <Button.Or />
              <Button
                onClick={() => toggleActiveLink('professional')}
                className={this.findActiveLink('professional')}
              >
                Professional
              </Button>
            </Button.Group>
          </div>
        </Grid>
        {link === 'professional' ? <ProSignup /> : <CustomerSignup />}
      </div>
    );
  }
}

Signup.propTypes = {
  activeLink: React.PropTypes.string.isRequired,
  toggleActiveLink: React.PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({
    activeLink: state.auth.signupForm.activeLink,
  });

const mapDispatchToProps = dispatch =>
  ({
    toggleActiveLink: link => dispatch(toggleSignupLink(link)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
