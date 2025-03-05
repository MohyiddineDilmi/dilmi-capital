import React, { useEffect } from 'react';
import Leadership from '../sections/Leadership';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../utils/seoConfig';

const LeadershipPage = () => {
  // Force scroll to top immediately when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    // Try again after a short delay to handle any race conditions
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <div className="page-container">
      <SEO {...PAGE_SEO.leadership} />
      <div className="page-header">
        <div className="container">
          <h1>Leadership</h1>
        </div>
      </div>
      <Leadership />
    </div>
  );
};

export default LeadershipPage; 