import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function HeroSection() {
  

  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Sip, Savor and Celebrate.</h1>
      <div className='hero-btns'>
        <Link to='/map'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
