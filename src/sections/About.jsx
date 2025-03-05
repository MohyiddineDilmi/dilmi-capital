import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span className="highlight">Dilmi Capital</span></h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              Dilmi Capital is a forward-thinking venture capital firm committed to identifying, 
              investing in, and nurturing groundbreaking technologies and disruptive business models.
            </p>
            
            <div className="about-description">
              <p>
                Founded in 2025, we're building a reputation for partnering with exceptional entrepreneurs 
                who challenge industry norms and drive meaningful innovation. Our investment approach is 
                characterized by deep sector expertise, a collaborative partnership model, and a long-term 
                perspective on value creation.
              </p>
              <p>
                Our <span className="highlight">vision</span> is centered on identifying transformative opportunities ahead of the market. 
                We focus on early and growth-stage investments across technology, healthcare, financial 
                services, and consumer markets. Our team brings decades of operational and investment 
                experience, providing strategic guidance, operational support, and access to our extensive 
                network of industry connections.
              </p>
              <p>
                We believe in <span className="highlight">partnership</span> - building collaborative, long-term relationships with founders 
                that extend beyond capital. Through these partnerships, we strive to create lasting 
                <span className="highlight"> impact</span> by generating value for investors, helping companies reach their full potential,
                and contributing positively to society through responsible innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 