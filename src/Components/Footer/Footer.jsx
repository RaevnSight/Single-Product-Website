import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/peanut_butter_logo_big.png';
import instagram_icon from '../Assets/instagram.png';
import facebook_icon from '../Assets/facebook.png';
import messenger_icon from '../Assets/facebook-messenger.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo" />
        <p>NORMIE'S</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="Facebook Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={messenger_icon} alt="Messenger Icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - ALL Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
