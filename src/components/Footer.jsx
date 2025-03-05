import React from 'react';
import logo from '../assets/dilmi-capital-logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-center">
            <div className="footer-logo">
              <a href="#home">
                <img src={logo} alt="Dilmi Capital Logo" className="footer-logo-img" />
              </a>
              <p className="tagline">Investing in tomorrow's innovations</p>
            </div>
            
            <div className="footer-info">
              <div className="footer-contact">
                <h4>Contact</h4>
                <a href="mailto:contact@dilmicapital.com">contact@dilmicapital.com</a>
              </div>
              
              <div className="footer-social">
                <h4>Connect</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/dilmi-capital" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="divider">|</span>
              <a href="#">Terms of Service</a>
            </div>
            
            <div className="footer-copyright">
              <p>&copy; {currentYear} Dilmi Capital</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 