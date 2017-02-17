import React from 'react';
import { Link } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react'

export const Navbar = ({handleItemClick, activeLink}) => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item active={activeLink === 'aboutUs'} onClick={() => handleItemClick('aboutUs')} name='aboutUs'/>
        <Menu.Item active={activeLink === 'jobs'} onClick={() => handleItemClick('jobs')} name='jobs'/>
        <Menu.Item active={activeLink === 'location'} onClick={()=>handleItemClick('location')} name='locations'/>

        <Menu.Menu position='right'>
          <Menu.Item name='signup'>
            Sign Up
          </Menu.Item>

          <Menu.Item name='login'>
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
