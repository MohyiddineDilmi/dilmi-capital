import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/dilmi-capital-logo.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Handle hash navigation after page loads
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  // Add a new effect to scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage with hash
      navigate(`/${sectionId === 'home' ? '' : '#' + sectionId}`);
      return;
    }
    
    // If already on homepage, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      // If home section doesn't exist or we want to go to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateHome = (e) => {
    e.preventDefault();
    closeMenu();
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage
      navigate('/');
      return;
    }
    
    // If already on homepage, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (path) => {
    // First close the mobile menu
    closeMenu();
    
    // Use React Router's navigate function instead of window.location
    navigate(path);
    
    // Ensure we scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/" onClick={navigateHome}>
            <img src={logo} alt="Dilmi Capital Logo" className="logo-img" />
          </a>
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/" onClick={navigateHome}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="/leadership" onClick={(e) => { e.preventDefault(); navigateTo('/leadership'); }}>Leadership</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a></li>
            <li><a href="/news" onClick={(e) => { e.preventDefault(); navigateTo('/news'); }}>News</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;