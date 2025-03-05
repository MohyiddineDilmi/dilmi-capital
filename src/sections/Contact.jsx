import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-content">
          <div className="row">
            <div className="contact-text">
              <p className="contact-lead">
                Whether you're exploring partnership opportunities or simply want to learn more about 
                Dilmi Capital, we'd love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h4 className="gradient-text">Email</h4>
                  <a href="mailto:contact@dilmicapital.com" className="contact-email">contact@dilmicapital.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 