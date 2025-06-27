import { useEffect } from 'react';

declare global {
  interface Window {
    displayPreferenceModal?: () => void;
    Termly?: {
      initialize: (config: { 
        container: string; 
        api_url: string;
        cookie_policy_url?: string;
      }) => void;
    };
  }
}

const useTermly = () => {
  useEffect(() => {
    const loadTermly = () => {
      // Remove any existing Termly scripts
      const existingScript = document.getElementById('termly-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and append the new script
      const script = document.createElement('script');
      script.id = 'termly-script';
      script.src = 'https://app.termly.io/resource-blocker/89fc25dc-46db-4375-a244-f041562ed2cc?autoBlock=on';
      script.async = true;

      // Add load handler
      script.onload = () => {
        // Create a container for Termly if it doesn't exist
        let container = document.getElementById('termly-consent-container');
        if (!container) {
          container = document.createElement('div');
          container.id = 'termly-consent-container';
          document.body.appendChild(container);
        }

        // Initialize Termly with explicit configuration
        if (window.Termly) {
          window.Termly.initialize({
            container: 'termly-consent-container',
            api_url: 'https://app.termly.io',
            cookie_policy_url: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=2e3fe95e-1050-4506-894c-e95e94954ed1'
          });
        }
      };

      // Add error handling
      script.onerror = (error) => {
        console.error('Failed to load Termly script:', error);
      };

      // Insert as the first script in head
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    };

    // Initial load
    loadTermly();

    // Cleanup on unmount
    return () => {
      const script = document.getElementById('termly-script');
      const container = document.getElementById('termly-consent-container');
      if (script) script.remove();
      if (container) container.remove();
    };
  }, []);
};

export default useTermly; 