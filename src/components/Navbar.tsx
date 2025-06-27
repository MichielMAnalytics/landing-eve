import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  currentPage: 'home' | 'pricing' | 'about' | 'products' | 'contact';
};

const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-[#0E0E0E] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 focus-visible:ring-2 focus-visible:ring-[#0E1593] rounded">
            <img src="/autoeve-logo.png" alt="Eve Logo" className="w-8 h-8" />
            <span className="text-xl font-normal font-comfortaa text-[#FFFFFF]">Eve</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${currentPage === 'home' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] transition-colors font-inter`}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className={`${currentPage === 'pricing' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] transition-colors font-inter`}
            >
              Pricing
            </Link>

            <div className="flex items-center space-x-3">
              <button 
                className="bg-gradient-to-r from-[#0E1593] to-[#04062D] border border-[rgba(216,217,236,0.5)] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0E1593]/20 font-inter"
                onClick={() => { window.location.href = 'https://app.witheve.ai/'; }}
              >
                Login
              </button>
              <button 
                className="border border-[rgba(216,217,236,0.5)] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 font-inter"
                onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
              >
                Get Started
              </button>
            </div>
          </div>

          <button 
            className="md:hidden text-[#FFFFFF]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#04062D] border-t border-[#0E0E0E]">
          <div className="px-6 py-4 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 ${currentPage === 'home' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] font-inter`}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className={`block py-2 ${currentPage === 'pricing' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] font-inter`}
            >
              Pricing
            </Link>

            <div className="space-y-3">
              <button 
                className="w-full bg-gradient-to-r from-[#0E1593] to-[#04062D] text-white py-2.5 rounded-lg font-medium font-inter border border-[rgba(216,217,236,0.2)]"
                onClick={() => { window.location.href = 'https://app.witheve.ai/'; }}
              >
                Login
              </button>
              <button 
                className="w-full border border-[rgba(216,217,236,0.3)] text-white py-2.5 rounded-lg font-medium font-inter transition-all duration-300 hover:bg-white/10"
                onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 