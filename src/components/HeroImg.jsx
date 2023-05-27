import React from 'react';
import "./HeroImgStyle.css";
import IntroImg from "../assets/intro-bg.jpg";
import { NavLink } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='intro-bg' src={IntroImg} alt="intro-img" />
        </div>
        <div className="content">
            <p>hi i am freelancer</p>
            <h1>react developer</h1>
            <div>
                <NavLink to="./projects" className="btn">Projects</NavLink>
                <NavLink to="./contact" className="btn btn-light">Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default HeroImg