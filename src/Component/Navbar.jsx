import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="EmoTrack" className="main-logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
        <li><Link to="/Result">Result</Link></li>
        <li><Link to="/scan">Emotions Scan</Link></li>
      </ul>

  
       <div className="nav-buttons">
  <Link to="/login" className="btn-signin">Sign In</Link>
  <Link to="/signup" className="btn-signup">Sign Up</Link>
</div>
    </nav>
    
  );
};

export default Navbar;
