import React, { useEffect } from 'react';
import News from '../sections/News';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../utils/seoConfig';

const NewsPage = () => {
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
      <SEO {...PAGE_SEO.news} />
      <div className="page-header">
        <div className="container">
          <h1>News & Updates</h1>
        </div>
      </div>
      <News />
    </div>
  );
};

export default NewsPage; 