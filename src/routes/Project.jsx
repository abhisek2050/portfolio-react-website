import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects" text="Some of my recent works"/>
      <Footer/>
    </div>
  )
}

export default Project