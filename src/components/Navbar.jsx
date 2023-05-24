import './NavbarStyle.css';
import {NavLink} from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <div className='header'>
      <h1>Portfolio</h1>

      <ul className='nav-menu'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/project">Project</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
       
      </ul>
    </div>
  )
}

export default Navbar