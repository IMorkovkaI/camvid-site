import React from 'react'
import './header.css'


const Header = () => (
  <div className="camvid__header section__padding" id="home">
    <div className="camvid__header-content">
      <h1 id="contact" className="gradient__text">Experience Unparalleled Security and Peace of Mind with our Advanced CCTV Camera Systems</h1>
      <p>Discover a wide range of cutting-edge surveillance solutions designed to protect your property, loved ones, and valuable assets.</p>

      
        
        <div className="camvid__header-content__input">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder="Your Email Address" />
        <textarea placeholder='Your desired product'></textarea>
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="camvid__header-image">
      
    </div>
  </div>
);

export default Header