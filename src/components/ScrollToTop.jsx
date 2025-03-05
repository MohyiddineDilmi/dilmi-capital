import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component ensures that the page scrolls to the top when navigating to a new route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediately scroll to top when the pathname changes
    const scrollToTopMultipleTimes = () => {
      // Immediate scroll
      window.scrollTo(0, 0);
      
      // Attempt scrolling multiple times to ensure it happens
      setTimeout(() => window.scrollTo(0, 0), 10);
      setTimeout(() => window.scrollTo(0, 0), 50);
      setTimeout(() => window.scrollTo(0, 0), 100);
      setTimeout(() => window.scrollTo(0, 0), 200);
    };
    
    // Execute scroll reset
    scrollToTopMultipleTimes();
    
    // Also reset scroll position when the component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, [pathname]);

  // This component doesn't render anything
  return null;
}

export default ScrollToTop; 