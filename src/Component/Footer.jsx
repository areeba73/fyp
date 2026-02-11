import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Path check karlein

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo-container">
            <img src={logo} alt="EmoTrack" className="footer-logo" />
          </div>
          <p className="footer-desc">
            Your emotional wellbeing, tracked with precision and care. 
            Join our community today.
          </p>
          <div className="social-icons">
            <div className="icon-circle">f</div>
            <div className="icon-circle">t</div>
            <div className="icon-circle">in</div>
          </div>
        </div>

        {/* Website Links */}
        <div className="footer-column">
          <h4>Website</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Doctors</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact info ya extra links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>© 2026 EmoTrack. Built with ❤️ for your mental health.</p>
      </div>
    </footer>
  );
};

export default Footer;