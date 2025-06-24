import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#000000] border-t-2 border-[#0E0E0E] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="grid md:grid-cols-4 gap-12 items-start">
        <div className="col-span-1 flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <img src="/autoeve-logo.png" alt="Eve Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold font-comfortaa text-[#FFFFFF]">With Eve</span>
          </div>
          <p className="text-[#FFFFFF]/70 text-base font-inter">
            Work Smarter.<br />Work with Eve.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">Product</h4>
          <ul className="space-y-2 text-[#FFFFFF]/70 text-base font-inter">
            <li><a href="/" className="hover:text-[#FFFFFF] transition-colors">Home</a></li>
            <li><a href="/pricing" className="hover:text-[#FFFFFF] transition-colors">Pricing</a></li>
            <li><a href="/products" className="hover:text-[#FFFFFF] transition-colors">Products</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">App</h4>
          <ul className="space-y-2 text-[#FFFFFF]/70 text-base font-inter">
            <li><a href="https://app.witheve.ai/" className="hover:text-[#FFFFFF] transition-colors" target="_self" rel="noopener noreferrer">Go to Application</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-bold mb-4 text-[#FFFFFF] font-comfortaa tracking-tight">Support</h4>
          <form className="flex flex-col gap-2" onSubmit={e => { e.preventDefault(); /* handle submit here */ }}>
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg bg-[#18181B] text-white placeholder-white/60 border border-[#232336] focus:outline-none focus:ring-2 focus:ring-[#0E1593] font-inter"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0E1593] to-[#04062D] text-white font-inter font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-all"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-[#0E0E0E] mt-12 pt-8 text-center text-[#FFFFFF]/70 text-base font-inter">
        <p>&copy; 2025 Eve Protocol. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 