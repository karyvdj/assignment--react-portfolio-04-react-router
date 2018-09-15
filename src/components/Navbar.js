import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink exact  activeClassName="navitem--selected" to="/">Home</NavLink>
        <NavLink activeClassName="navitem--selected" to="/cv">CV</NavLink>
        <NavLink activeClassName="navitem--selected" to="/projects">Projects</NavLink>
      </nav>
    )
  }
}

export default Navbar
