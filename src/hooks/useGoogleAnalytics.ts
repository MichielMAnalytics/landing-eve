import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Define event categories and actions
export const GA_EVENTS = {
  SCROLL: {
    CATEGORY: 'scroll',
    ACTIONS: {
      REACH_25: '25_percent',
      REACH_50: '50_percent',
      REACH_75: '75_percent',
      REACH_100: '100_percent',
    },
  },
  BUTTON: {
    CATEGORY: 'button',
    ACTIONS: {
      CLICK_GET_STARTED: 'click_get_started',
      CLICK_BOOK_DEMO: 'click_book_demo',
      CLICK_LOGIN: 'click_login',
      CLICK_HIRE_AGENT: 'click_hire_agent',
    },
  },
  SECTION: {
    CATEGORY: 'section',
    ACTIONS: {
      VIEW_MEET_STARS: 'view_meet_stars',
      VIEW_SOLUTION: 'view_solution',
      VIEW_BUILD_AGENT: 'view_build_agent',
      VIEW_VALUES: 'view_values',
      VIEW_AGENT_USES: 'view_agent_uses',
      VIEW_INTEGRATION: 'view_integration',
    },
  },
};

export const useGoogleAnalytics = () => {
  const location = useLocation();

  // Page view tracking
  const pageView = useCallback((path: string) => {
    window.gtag('config', 'G-ZGGRTRKF17', {
      page_path: path,
    });
  }, []);

  // Generic event tracking
  const trackEvent = useCallback((category: string, action: string, label?: string, value?: number) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }, []);

  // Scroll tracking
  const setupScrollTracking = useCallback(() => {
    let scrolled25 = false;
    let scrolled50 = false;
    let scrolled75 = false;
    let scrolled100 = false;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

      if (!scrolled25 && scrollPercent >= 25) {
        trackEvent(GA_EVENTS.SCROLL.CATEGORY, GA_EVENTS.SCROLL.ACTIONS.REACH_25);
        scrolled25 = true;
      }
      if (!scrolled50 && scrollPercent >= 50) {
        trackEvent(GA_EVENTS.SCROLL.CATEGORY, GA_EVENTS.SCROLL.ACTIONS.REACH_50);
        scrolled50 = true;
      }
      if (!scrolled75 && scrollPercent >= 75) {
        trackEvent(GA_EVENTS.SCROLL.CATEGORY, GA_EVENTS.SCROLL.ACTIONS.REACH_75);
        scrolled75 = true;
      }
      if (!scrolled100 && scrollPercent >= 98) { // Using 98% to ensure it triggers reliably
        trackEvent(GA_EVENTS.SCROLL.CATEGORY, GA_EVENTS.SCROLL.ACTIONS.REACH_100);
        scrolled100 = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackEvent]);

  // Section visibility tracking using Intersection Observer
  const setupSectionTracking = useCallback(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && GA_EVENTS.SECTION.ACTIONS[sectionId as keyof typeof GA_EVENTS.SECTION.ACTIONS]) {
            trackEvent(
              GA_EVENTS.SECTION.CATEGORY,
              GA_EVENTS.SECTION.ACTIONS[sectionId as keyof typeof GA_EVENTS.SECTION.ACTIONS]
            );
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Observe all sections that we want to track
    Object.keys(GA_EVENTS.SECTION.ACTIONS).forEach(actionKey => {
      const element = document.getElementById(actionKey.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [trackEvent]);

  useEffect(() => {
    // Send pageview with current path
    pageView(location.pathname + location.search);
  }, [location, pageView]);

  useEffect(() => {
    const removeScrollTracking = setupScrollTracking();
    const removeSectionTracking = setupSectionTracking();

    return () => {
      removeScrollTracking();
      removeSectionTracking();
    };
  }, [setupScrollTracking, setupSectionTracking]);

  return { trackEvent };
}; 