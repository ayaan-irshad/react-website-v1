import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/img/img-1.jpg'  />
      <h1>Best in Class Freight Services</h1>
      <p>Freight services all across US</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
