import React, { useEffect } from 'react';

const Leadership = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <div className="leadership-content">
          <p className="leadership-lead">
            Our team brings together diverse perspectives and complementary expertise 
            to identify opportunities and create value for our portfolio companies.
          </p>
          
          <div className="team-grid">
            <div className="team-member neo-card">
              <div className="team-member-photo team-photo-1"></div>
              <h4>Sarah Johnson</h4>
              <p>Founder & Managing Partner</p>
            </div>
            <div className="team-member neo-card">
              <div className="team-member-photo team-photo-2"></div>
              <h4>Michael Chen</h4>
              <p>Partner, Technology</p>
            </div>
            <div className="team-member neo-card">
              <div className="team-member-photo team-photo-3"></div>
              <h4>Aisha Patel</h4>
              <p>Partner, Healthcare</p>
            </div>
            <div className="team-member neo-card">
              <div className="team-member-photo team-photo-4"></div>
              <h4>David Rodriguez</h4>
              <p>Partner, Financial Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership; 