import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Sip, Savor and Celebrate.</h1>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      
      </div>
    </div>
  );
}

export default HeroSection;
