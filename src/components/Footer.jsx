import React from 'react';
import logo from '../assets/dilmi-capital-logo.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    // Navigate to privacy policy page (create this page later)
    // For now, you can just show an alert or do nothing
    alert('Privacy Policy page will be available soon');
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    // Navigate to terms of service page (create this page later)
    // For now, you can just show an alert or do nothing
    alert('Terms of Service page will be available soon');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-center">
            <div className="footer-logo">
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
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
              <button 
                onClick={handlePrivacyClick}
                className="footer-link-button"
              >
                Privacy Policy
              </button>
              <span className="divider">|</span>
              <button 
                onClick={handleTermsClick}
                className="footer-link-button"
              >
                Terms of Service
              </button>
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