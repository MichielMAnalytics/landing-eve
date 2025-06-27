import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Cookies: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://app.termly.io/policy-viewer/policy.html?policyUUID=2e3fe95e-1050-4506-894c-e95e94954ed1';
  }, []);

  return null;
};

export default Cookies; 