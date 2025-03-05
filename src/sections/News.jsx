import React, { useEffect } from 'react';

const News = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section id="news" className="news">
      <div className="container">
        <div className="news-content">
          <p className="news-lead">
            Stay updated with the latest announcements, press releases, and insights from Dilmi Capital.
          </p>
          
          <div className="news-grid">
            <div className="news-item neo-card">
              <div className="news-date">June 15, 2025</div>
              <h3>Dilmi Capital Announces $100M Fund III</h3>
              <p>
                Dilmi Capital has successfully closed its third fund with $100 million in commitments, 
                exceeding the initial target of $75 million. The new fund will continue our focus on 
                early-stage technology companies.
              </p>
              <a href="#" className="news-link">Read More</a>
            </div>
            
            <div className="news-item neo-card">
              <div className="news-date">May 3, 2025</div>
              <h3>Portfolio Company SynthBio Completes Series B Round</h3>
              <p>
                SynthBio, a pioneer in synthetic biology applications, has raised $45 million in Series B 
                funding led by Dilmi Capital, supporting their expansion into new therapeutic areas.
              </p>
              <a href="#" className="news-link">Read More</a>
            </div>
            
            <div className="news-item neo-card">
              <div className="news-date">April 12, 2025</div>
              <h3>Dilmi Capital Welcomes New Advisor</h3>
              <p>
                Dr. Elena Martinez, former CTO of BioTech Innovations, joins Dilmi Capital's advisory 
                board, bringing extensive experience in healthcare technology and AI applications.
              </p>
              <a href="#" className="news-link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 