import React, { useEffect } from 'react';

const News = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const handleReadMore = (articleId, e) => {
    e.preventDefault();
    // Navigate to the full article page (to be created later)
    // For now, we'll just show an alert
    alert(`Full article for ID: ${articleId} coming soon!`);
    // Later you can use: navigate(`/news/${articleId}`)
  };
  
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
              <button 
                onClick={(e) => handleReadMore('fund-iii-announcement', e)} 
                className="news-link-button"
              >
                Read More
              </button>
            </div>
            
            <div className="news-item neo-card">
              <div className="news-date">May 3, 2025</div>
              <h3>Portfolio Company SynthBio Completes Series B Round</h3>
              <p>
                SynthBio, a pioneer in synthetic biology applications, has raised $45 million in Series B 
                funding led by Dilmi Capital, supporting their expansion into new therapeutic areas.
              </p>
              <button 
                onClick={(e) => handleReadMore('synthbio-series-b', e)} 
                className="news-link-button"
              >
                Read More
              </button>
            </div>
            
            <div className="news-item neo-card">
              <div className="news-date">April 12, 2025</div>
              <h3>Dilmi Capital Welcomes New Advisor</h3>
              <p>
                Dr. Elena Martinez, former CTO of BioTech Innovations, joins Dilmi Capital's advisory 
                board, bringing extensive experience in healthcare technology and AI applications.
              </p>
              <button 
                onClick={(e) => handleReadMore('new-advisor', e)} 
                className="news-link-button"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 