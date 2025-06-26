import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  const location = useLocation();

  const pageView = useCallback((path: string) => {
    window.gtag('config', 'G-ZGGRTRKF17', {
      page_path: path,
    });
  }, []);

  useEffect(() => {
    // Send pageview with current path
    pageView(location.pathname + location.search);
  }, [location, pageView]);
}; 