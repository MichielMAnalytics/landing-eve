import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-[#000000] border-t-2 border-[#0E0E0E] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            <img src="/autoeve-logo.png" alt="Eve Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold font-comfortaa text-[#FFFFFF]">With Eve</span>
          </div>
          <p className="text-[#FFFFFF]/70 text-base font-nunito">
            Work Smarter.<br />Work with Eve.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">Product</h4>
          <ul className="space-y-2 text-[#FFFFFF]/70 text-base font-nunito">
            <li><Link to="/" className="hover:text-[#FFFFFF] transition-colors">Home</Link></li>
            <li><Link to="/pricing" className="hover:text-[#FFFFFF] transition-colors">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">App</h4>
          <ul className="space-y-2 text-[#FFFFFF]/70 text-base font-nunito">
            <li><a href="https://app.witheve.ai/" className="hover:text-[#FFFFFF] transition-colors" target="_self" rel="noopener noreferrer">Go to Application</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">Policy</h4>
          <ul className="space-y-2 text-[#FFFFFF]/70 text-base font-nunito">
            <li><Link to="/terms" className="hover:text-[#FFFFFF] transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-[#FFFFFF] transition-colors">Privacy Policy</Link></li>
            <li><a href="#" className="termly-display-preferences hover:text-[#FFFFFF] transition-colors">Cookie Preferences</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#0E0E0E] mt-12 pt-8 text-center text-[#FFFFFF]/70 text-base font-nunito">
        <p>&copy; 2025 Eve Protocol. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 