import './NavbarStyle.css';
import {NavLink} from "react-router-dom";
import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [click,setClick] = useState(false);
  const fnClick=()=>{
    setClick(!click);
  }
  const [color,setColor] =useState(false);
  const changeColor=()=>{
    window.scrollY>0 ? setColor(true):setColor(false);
  } 
  window.addEventListener('scroll',changeColor);
  return (
    <div className={color? 'header header-bg' : 'header'}>
      <h1>
        <NavLink to="/">Portfolio</NavLink>
      </h1>

      <ul className={click ? "nav-menu active" : "nav-menu" }>
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
      <div className="hamburger" onClick={fnClick}> 
        <>
        {
        click?<FaTimes size={20} style={{color:'#fff'}}/>: <FaBars size={20} style={{color:'#fff'}}/>
          
        }
        
        </>
      </div>
    </div>
  )
}

export default Navbar