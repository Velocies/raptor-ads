import React from 'react';
import { Link } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react'

export const Navbar = ({location}) => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item as={Link} to='landing' name='About' active={location === 'landing'} />
          <Menu.Item active={location === 'jobs'} name='jobs'/>
          <Menu.Item active={location === 'location'} name='locations'/>

          <Menu.Menu position='right'>
            <Link to='signup' className='item'>
              Sign Up
            </Link>

            <Menu.Item as={Link} to='login' name='login'>
              Login
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
      )
      };



      // import React, { Component } from 'react'
      // import { Menu } from 'semantic-ui-react'

      // export default class MenuExampleHeader extends Component {
        //   state = {}

        //   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

        //   render() {
        //     const { activeItem } = this.state

        //     return (
        //       <Menu>
        //         <Menu.Item header>Our Company</Menu.Item>
        //         <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
        //         <Menu.Item name='jobs'  onClick={this.handleItemClick} />
        //         <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
        //       </Menu>
        //     )
        //   }
        // }
