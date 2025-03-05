import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="glow-text">Investing</span> in the <br />
            Future of <span className="highlight">Innovation</span>
          </h1>
          
          <p className="hero-subtitle">
            Dilmi Capital partners with visionaries to build exceptional 
            companies and generate superior returns.
          </p>
          
          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-primary">Explore Portfolio</a>
            <a href="#about" className="btn">Learn More</a>
          </div>
        </div>        
      </div>
      
      {/* Scroll indicator removed as requested */}
    </section>
  );
};

export default Hero; 