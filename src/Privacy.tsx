import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://app.termly.io/policy-viewer/policy.html?policyUUID=8e73b71f-0dff-46c4-a312-a7a418937749';
  }, []);

  return null;
};

export default Privacy; 