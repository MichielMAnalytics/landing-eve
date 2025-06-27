import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Terms: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://app.termly.io/policy-viewer/policy.html?policyUUID=2512b9fa-1f74-489a-be43-d5336e089119';
  }, []);

  return null;
};

export default Terms; 