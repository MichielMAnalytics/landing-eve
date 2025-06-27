import React, { useEffect } from 'react';

const Cookies: React.FC = () => {
  useEffect(() => {
    // Load Termly script
    const script = document.createElement('script');
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.id = "termly-jssdk";
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.getElementById("termly-jssdk");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h1 className="text-4xl font-comfortaa text-white mb-8">Cookie Policy</h1>
        <div data-name="termly-embed" data-id="7fe0551c-b80a-4508-a25d-3b92faa89653"></div>
      </div>
    </div>
  );
};

export default Cookies; 