import React from 'react';
import './Header.css';
import img1 from '../assets/img1.png'; // Ladki aur robot wali image crop karke yahan lagayein

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="brand-name">EmoTrack</span>
        </h1>
        <p className="hero-subtitle">
          Track your emotions. <br />
          Understand yourself. Feel better.
        </p>
        
        <div className="hero-btns">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Try Emotion Scan</button>
        </div>
      </div>

      <div className="hero-image-container">
        {/* Aapki uploaded image ka ladki/robot wala hissa yahan aayega */}
        <img src={img1} alt="Emotion Tracking AI" className="hero-img" />
        
        {/* Background decorative blobs (Image jaisa effect dene ke liye) */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
};

export default Hero;