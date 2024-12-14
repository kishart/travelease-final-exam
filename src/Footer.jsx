import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">Email: contact@travelease.com</p>
          <p className="footer-text">Phone: +1 123 456 7890</p>
          <p className="footer-text">Address: 123 Travel Lane, Wanderlust City</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p className="footer-text">© 2024 TravelEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
