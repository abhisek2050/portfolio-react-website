import React from 'react'
import './AboutContentStyle.css';
import { Link } from 'react-router-dom';
import image1 from '../assets/react1.jpg';
import image2 from '../assets/react2.webp';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>i am a react developer.i create responsive secure websites for my clients.</p>
            <Link to='/contact'>
                <button className='btn'>contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={image1} className='img' alt="image" />
                </div>
                <div className="img-stack bottom">
                    <img src={image2} className='img' alt="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent