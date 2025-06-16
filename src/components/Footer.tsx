import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#000000] border-t-2 border-[#0E0E0E] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="/autoeve-logo.png" alt="Eve Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold font-comfortaa text-[#FFFFFF]">Eve</span>
          </div>
          <p className="text-[#FFFFFF]/70 text-base font-inter">
            The automation platform for everyone.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">Product</h4>
          <ul className="space-y-2 text-[#FFFFFF]/70 text-base font-inter">
            <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Features</a></li>
            <li><a href="/pricing" className="hover:text-[#FFFFFF] transition-colors font-bold">Pricing</a></li>
            <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">Company</h4>
          <ul className="space-y-2 text-[#FFFFFF]/70 text-base font-inter">
            <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">Support</h4>
          <ul className="space-y-2 text-[#FFFFFF]/70 text-base font-inter">
            <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">API</a></li>
            <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Status</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#0E0E0E] mt-12 pt-8 text-center text-[#FFFFFF]/70 text-base font-inter">
        <p>&copy; 2025 Eve. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 